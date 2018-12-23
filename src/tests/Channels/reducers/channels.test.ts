import {channels} from '../../../Channels/reducers/channels';
import * as Immutable from 'immutable';
import {IChannel} from '../../../Channels/models/IChannel';
import {CHANNEL_APP_CHANNEL_CREATE_SUCCESS, CHANNEL_APP_CHANNEL_REMOVE_SUCCESS, CHANNEL_APP_CHANNEL_UPDATE_SUCCESS, CHANNEL_APP_LOADING_SUCCESS} from '../../../Channels/constants/actionTypes';

const testChannels: IChannel[] = [
    {
        id: "123",
        name: "Special channel",
        customData: {
            members: Immutable.Set<string>(),
            image: null
        }
    },
    {
        id: "321",
        name: "Awesome channel",
        customData: {
            members: Immutable.Set<string>(["member1", "member2", "member1"]),
            image: null
        }
    }
];

const testMap = Immutable.Map({
    "123": {
        id: "123",
        name: "Special channel",
        customData: {
            members: Immutable.Set<string>(),
        }
    },
    "321": {
        id: "321",
        name: "Awesome channel",
        customData: {
            members: Immutable.Set<string>(["member1", "member2"]), // members will not repeat
        }
    }
});

describe(
  "channel reducer", () => {
      it("should return previous state on random action", () => {
          expect(channels(
              {
                  allIds: Immutable.List<string>(),
                  byId: Immutable.Map(),
              },
              {
                  type: 'random',
              },
          )).toEqual({
              byId: Immutable.Map(),
              allIds: Immutable.List()
          })
      });

      it("loading success on empty previous state", () => {
          expect(channels(
              {
                  allIds: Immutable.List<string>(),
                  byId: Immutable.Map(),
              },
              {
                  type: CHANNEL_APP_LOADING_SUCCESS,
                  payload: { channels: testChannels }
              }
          )).toEqual({
              byId: testMap,
              allIds: Immutable.List<string>(["123", "321"])
          })
      });

      it("loading success on non-empty previous state", () => {
          expect(channels({
              allIds: Immutable.List(["12"]),
              byId: Immutable.Map<string, IChannel>({
                  "12": {
                      id: "12",
                      name: "this channel will not exist",
                      customData: {
                          members: Immutable.Set<string>([]),
                      }
                  }
              })
          },{
              type: CHANNEL_APP_LOADING_SUCCESS,
              payload: {channels: testChannels}
          })).toEqual({
              byId: testMap,
              allIds: Immutable.List<string>(["123", "321"])
          })
      });


      it("create channel success", () => {
          expect(channels({
                allIds: Immutable.List(["123"]),
                byId: Immutable.Map({
                    "123": testChannels[0]
                })
              },
              {
                  type: CHANNEL_APP_CHANNEL_CREATE_SUCCESS,
                  payload: {
                      channel: testChannels[1]
                  }
              }
          )).toEqual({
              byId: Immutable.Map({
                  "123": testChannels[0],
                  "321": testChannels[1]
              }),
              allIds: Immutable.List<string>(["123", "321"])
          })
      });

      it("channel update success", () => {
          expect(channels({
              allIds: Immutable.List(["123",]),
              byId: Immutable.Map({
                  "123": testChannels[0]
              })
          },
              {
                  type: CHANNEL_APP_CHANNEL_UPDATE_SUCCESS,
                  payload: {
                      channel: {
                          id: "123",
                          name: "new name",
                          customData: {
                              members: Immutable.Set(),
                              image: null,
                          }
                      }
                  }
              }
          )).toEqual({
              allIds: Immutable.List(["123",]),
              byId: Immutable.Map({
                  "123": {... testChannels[0], name: "new name" }
              })
          })
      });

      it("Channel remove success", () => {
          expect(channels({
              allIds: Immutable.List(["123", "321"]),
              byId: Immutable.Map({
                  "123": testChannels[0],
                  "321": testChannels[1],
              })
          }, {
              type: CHANNEL_APP_CHANNEL_REMOVE_SUCCESS,
              payload: {channelId: "123"}
          })).toEqual({
              allIds: Immutable.List(["321"]),
              byId: Immutable.Map({
                  "321": testChannels[1],
              })
          });
      });
    }
);
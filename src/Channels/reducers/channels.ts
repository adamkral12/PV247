import * as Immutable from 'immutable';
import { IChannel } from '../models/IChannel';
import {
    CHANNEL_APP_LOADING_SUCCESS,
    CHANNEL_LIST_CHANNEL_CREATE,
    CHANNEL_LIST_CHANNEL_REMOVE,
    CHANNEL_LIST_CHANNEL_UPDATE
} from '../constants/actionTypes';
import {combineReducers} from 'redux';
import {IChannels} from '../models/IChannelList';

const allIds = (prevState: Immutable.List<string> = Immutable.List(), action: Action): Immutable.List<string> => {
  switch (action.type) {
      case CHANNEL_APP_LOADING_SUCCESS:
          return Immutable.List(action.payload.channels.map((channel: IChannel) => channel.id));

      case CHANNEL_LIST_CHANNEL_CREATE:
          return prevState.push(action.payload.channel.id);
      default:
        return prevState;
  }
};

const byId = (prevState = Immutable.Map<string, IChannel>(), action: Action): Immutable.Map<string, IChannel> => {
    switch (action.type) {
        case CHANNEL_APP_LOADING_SUCCESS:
        case CHANNEL_LIST_CHANNEL_REMOVE:
            console.log( Immutable.Map(action.payload.channels.map((channel: IChannel) => [channel.id, channel])));
            return Immutable.Map(action.payload.channels.map((channel: IChannel) => [channel.id, {
                ...channel, customData: {...channel.customData, members: Immutable.Set(channel.customData.members) }
            }]));
        case CHANNEL_LIST_CHANNEL_CREATE:
            return prevState.set(action.payload.channel.id, action.payload.channel);

        case CHANNEL_LIST_CHANNEL_UPDATE: {
            const { channel } = action.payload;
            // const oldChannel = prevState.get(channel.id);
            return prevState.set(channel.id, {...channel });
            // console.log(channel);
            // if (channel.customData.image) {
            //     console.log("image");
            //     return prevState.set(channel.id, {
            //         ...oldChannel, customData: {...oldChannel.customData, image: channel.customData.image}
            //     });
            //
            //     // console.log(prevState.get(channel.id));
            // }
            //
            // const members = oldChannel.customData.members.union(action.payload.channel.customData.invitedUsers);
            //
            // const picovina = prevState.set(channel.id, {
            //     ...oldChannel, customData: {...oldChannel.customData, members }
            // });
            //
            // console.log(picovina);
            // return prevState;
        }

        default:
            return prevState;
    }
};

export const channels = combineReducers<IChannels>({
        allIds,
        byId,
});

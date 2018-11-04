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
          console.log("loading success");
          console.log(Immutable.List(action.payload.channels.map((channel: IChannel) => channel.id)));
          return Immutable.List(action.payload.channels.map((channel: IChannel) => channel.id));

      case CHANNEL_LIST_CHANNEL_CREATE:
          console.log("channel create");
          console.log(action.payload);
          return prevState.push(action.payload.channel.id);
      default:
        return prevState
  }
};

const byId = (prevState = Immutable.Map<string, IChannel>(), action: Action): Immutable.Map<string, IChannel> => {
    switch (action.type) {
        case CHANNEL_APP_LOADING_SUCCESS:
        case CHANNEL_LIST_CHANNEL_REMOVE:
            return Immutable.Map(action.payload.channels.map((channel: IChannel) => [channel.id, channel]));

        case CHANNEL_LIST_CHANNEL_CREATE:
            return prevState.set(action.payload.channel.id, action.payload.channel);

        case CHANNEL_LIST_CHANNEL_UPDATE: {
            const { channel: channel } = action.payload;

            return prevState.set(channel.id, { ...channel });
        }

        default:
            return prevState;
    }
};

export const channels = combineReducers<IChannels>({
        allIds,
        byId,
});

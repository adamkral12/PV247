import * as Immutable from 'immutable';
import { IChannel } from '../models/IChannel';
import {
    CHANNEL_APP_LOADING_SUCCESS,
    CHANNEL_APP_CHANNEL_CREATE_SUCCESS,
    CHANNEL_APP_CHANNEL_REMOVE_SUCCESS,
    CHANNEL_APP_CHANNEL_UPDATE_SUCCESS
} from '../constants/actionTypes';
import {combineReducers} from 'redux';
import {IChannels} from '../models/IChannelList';

const allIds = (prevState: Immutable.List<string> = Immutable.List(), action: Action): Immutable.List<string> => {
  switch (action.type) {
      case CHANNEL_APP_LOADING_SUCCESS:
          return Immutable.List(action.payload.channels.map((channel: IChannel) => channel.id));

      case CHANNEL_APP_CHANNEL_CREATE_SUCCESS:
          return prevState.push(action.payload.channel.id);

      case CHANNEL_APP_CHANNEL_REMOVE_SUCCESS:
          const index = prevState.indexOf(action.payload.messageId);
          return prevState.delete(index);
      default:
        return prevState;
  }
};

const byId = (prevState = Immutable.Map<string, IChannel>(), action: Action): Immutable.Map<string, IChannel> => {
    switch (action.type) {
        case CHANNEL_APP_LOADING_SUCCESS:
            return Immutable.Map(action.payload.channels.map((channel: IChannel) => [channel.id, channel]));
        case CHANNEL_APP_CHANNEL_CREATE_SUCCESS:
            return prevState.set(action.payload.channel.id, action.payload.channel);

        case CHANNEL_APP_CHANNEL_UPDATE_SUCCESS: {
            const { channel } = action.payload;
            return prevState.set(channel.id, { ...channel });
        }
        case CHANNEL_APP_CHANNEL_REMOVE_SUCCESS:
            return prevState.remove(action.payload.id);


        default:
            return prevState;
    }
};

export const channels = combineReducers<IChannels>({
        allIds,
        byId,
});

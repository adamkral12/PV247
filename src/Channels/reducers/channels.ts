import * as Immutable from 'immutable';
import { IChannel } from '../models/IChannel';
import {
  CHANNEL_LIST_CHANNEL_CREATE,
  CHANNEL_LIST_CHANNEL_REMOVE,
  CHANNEL_LIST_CHANNEL_UPDATE
} from '../constants/actionTypes';
import * as uuid from 'uuid';

export const channels = (prevState = Immutable.List<IChannel>(), action: Action): Immutable.List<IChannel> => {
  switch (action.type) {
    case CHANNEL_LIST_CHANNEL_CREATE: {
      const { name, customData } = action.payload;
      console.log(prevState);
      //TODO: id will be get from API
      return prevState.push({ id: uuid(), name, customData });
    }

    case CHANNEL_LIST_CHANNEL_REMOVE: {
      const { id } = action.payload;
      const index = prevState.findIndex((channel: IChannel) => channel.id === id);
      return prevState.remove(index);
    }

    case CHANNEL_LIST_CHANNEL_UPDATE: {
      const { id, name, customData } = action.payload;
      const index = prevState.findIndex((channel: IChannel) => channel.id === id);
      const oldList = prevState.get(index);
      return prevState.set(index, { ...oldList, name, customData });
    }
    default:
      return prevState;
  }
};

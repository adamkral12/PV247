import * as Immutable from 'immutable';
import { IChannel } from "../models/IChannel";
import {
  CHANNEL_LIST_CHANNEL_CREATE,
  CHANNEL_LIST_CHANNEL_REMOVE,
  CHANNEL_LIST_CHANNEL_UPDATE
} from "../constants/actionTypes";
// import {combineReducers} from "redux";
// import {IChannels} from "../models/IChannelApp";

// const byId = (prevState = Immutable.Map<string, IChannel>(), action: Action): Immutable.Map<string, IChannel> => {
//   switch (action.type) {
//       default:
//         return prevState;
//   }
// };

// const allIds = (prevState: Immutable.List<string> = Immutable.List(), action: Action): Immutable.List<string> => {
//   switch (action.type) {
//       default:
//         return prevState;
//   }
// };


export const channels = (prevState = Immutable.List<IChannel>(), action: Action): Immutable.List<IChannel> => {
  switch (action.type) {
    case CHANNEL_LIST_CHANNEL_CREATE: {
      const { id, name, customData } = action.payload;
      return prevState.push({ id, name, customData });
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

// export const channels = combineReducers<IChannels>({
//     allIds,
//     byId
// });

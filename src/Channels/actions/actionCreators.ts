import {
    CHANNEL_LIST_CHANNEL_CREATE,
    CHANNEL_LIST_CHANNEL_REMOVE,
    CHANNEL_APP_CHANNEL_UPDATE_CANCELLED, CHANNEL_APP_CHANNEL_UPDATE_STARTED
} from "../constants/actionTypes";
import { IChannelCustomData } from "../models/IChannelCustomData";

export const createChannel = (name: string, customData: IChannelCustomData): Action => ({
  type: CHANNEL_LIST_CHANNEL_CREATE,
  payload: {
    name,
    customData,
  }
});

export const cancelEditingChannel = (id: string): Action => ({
    type: CHANNEL_APP_CHANNEL_UPDATE_CANCELLED,
    payload: {
        id,
    }
});

export const startEditingChannel = (id: string): Action => ({
  type: CHANNEL_APP_CHANNEL_UPDATE_STARTED,
  payload: {
    id,
  }
});

export const removeChannel = (id: string): Action => ({
  type: CHANNEL_LIST_CHANNEL_REMOVE,
  payload: {
    id,
  }
});

import { CHANNEL_LIST_CHANNEL_UPDATE, CHANNEL_LIST_CHANNEL_CREATE, CHANNEL_LIST_CHANNEL_REMOVE } from "../constants/actionTypes";
import { IChannelCustomData } from "../models/IChannelCustomData";

export const createChannel = (name: string, customData: IChannelCustomData): Action => ({
  type: CHANNEL_LIST_CHANNEL_CREATE,
  payload: {
    name,
    customData,
  }
});

export const updateChannel = (id: string, name: string, customData: IChannelCustomData): Action => ({
  type: CHANNEL_LIST_CHANNEL_UPDATE,
  payload: {
    id,
    name,
    customData,
  }
});

export const removeChannel = (id: string): Action => ({
  type: CHANNEL_LIST_CHANNEL_REMOVE,
  payload: {
    id,
  }
});

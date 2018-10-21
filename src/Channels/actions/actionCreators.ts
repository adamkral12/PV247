import {
    CHANNEL_LIST_CHANNEL_UPDATE,
    CHANNEL_LIST_CHANNEL_REMOVE,
    CHANNEL_APP_SHOW_EDIT_CHANNEL, CHANNEL_APP_HIDE_EDIT_CHANNEL, CHANNEL_APP_SHOW_CREATE_CHANNEL
} from '../constants/actionTypes';
import { IChannelCustomData } from '../models/IChannelCustomData';

export const showCreateChannel = (): Action => ({
  type: CHANNEL_APP_SHOW_CREATE_CHANNEL,
  payload: {},
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

export const hideEditChannel = (): Action => ({
    type: CHANNEL_APP_HIDE_EDIT_CHANNEL,
    payload: {}
});

export const showEditChannel = (id: string): Action => ({
    type: CHANNEL_APP_SHOW_EDIT_CHANNEL,
    payload: {
      id,
    }
});

import {
    CHANNEL_LIST_CHANNEL_UPDATE,
    CHANNEL_LIST_CHANNEL_CREATE,
    CHANNEL_LIST_CHANNEL_REMOVE,
    CHANNEL_APP_SHOW_EDIT_CHANNEL, CHANNEL_APP_HIDE_EDIT_CHANNEL
} from '../constants/actionTypes';
import { IChannelCustomData } from '../models/IChannelCustomData';
import * as uuid from 'uuid';

export const createChannel = (name: string): Action => ({
  type: CHANNEL_LIST_CHANNEL_CREATE,
  payload: {
    name,
    id: uuid()
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

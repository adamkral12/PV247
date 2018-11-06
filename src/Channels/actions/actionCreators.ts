import * as uuid from 'uuid';

import {
    CHANNEL_LIST_CHANNEL_UPDATE,
    CHANNEL_LIST_CHANNEL_REMOVE,
    CHANNEL_APP_SHOW_EDIT_CHANNEL,
    CHANNEL_APP_HIDE_EDIT_CHANNEL,
    CHANNEL_APP_SHOW_CREATE_CHANNEL,
    CHANNEL_APP_SELECT_CHANNEL, CHANNEL_LIST_CHANNEL_CREATE, CHANNEL_APP_SET_VISIBILITY_FILTER
} from '../constants/actionTypes';
import {ChannelFilterEnum} from '../constants/ChannelFilterEnum';
import {IEditedChannelCustomData} from '../models/IEditedChannelCustomData';

export const showCreateChannel = (): Action => ({
  type: CHANNEL_APP_SHOW_CREATE_CHANNEL,
  payload: {},
});

export const updateChannel = (id: string | null, name: string, customData: IEditedChannelCustomData): Action => ({
  type: CHANNEL_LIST_CHANNEL_UPDATE,
  payload: {
      channel: {
          id,
          name,
          customData,
      }
  }
});

export const addChannel = (name: string, customData: IEditedChannelCustomData): Action => ({
    type: CHANNEL_LIST_CHANNEL_CREATE,
    payload: {
        channel: {
            name,
            customData,
            id: uuid(), // TODO: id will be probably generated from API
        }
    }
});

export const deleteChannel = (id: string | null): Action => ({
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

export const selectChannel = (id: string): Action => ({
    type: CHANNEL_APP_SELECT_CHANNEL,
    payload: {
        id,
    }
});

export const setVisibilityFilter = (filter: ChannelFilterEnum, text: string): Action => ({
    type: CHANNEL_APP_SET_VISIBILITY_FILTER,
    payload: {
        filter,
        text,
    }
});

import {CHANNEL_APP_HIDE_EDIT_CHANNEL, CHANNEL_APP_SET_VISIBILITY_FILTER, CHANNEL_APP_SHOW_CREATE_CHANNEL, CHANNEL_APP_SHOW_EDIT_CHANNEL, CHANNEL_LIST_HIDE_LIST, CHANNEL_LIST_SHOW_LIST} from '../constants/actionTypes';

export const showCreateChannel = (): Action => ({
    type: CHANNEL_APP_SHOW_CREATE_CHANNEL,
    payload: {},
});

export const hideEditChannel = (): Action => ({
    type: CHANNEL_APP_HIDE_EDIT_CHANNEL,
});

export const showEditChannel = (id: string): Action => ({
    type: CHANNEL_APP_SHOW_EDIT_CHANNEL,
    payload: {
        id,
    }
});


export const setVisibilityFilter = (text: string): Action => ({
    type: CHANNEL_APP_SET_VISIBILITY_FILTER,
    payload: {
        text,
    }
});


export const showChannelList = (): Action => ({
    type: CHANNEL_LIST_SHOW_LIST,
});

export const hideChannelList = (): Action => ({
    type: CHANNEL_LIST_HIDE_LIST,
});

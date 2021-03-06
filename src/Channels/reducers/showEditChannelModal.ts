import {EditedChannels} from '../models/EditedChannels';
import {
    CHANNEL_APP_SHOW_EDIT_CHANNEL,
    CHANNEL_APP_SHOW_CREATE_CHANNEL,
    CHANNEL_APP_HIDE_EDIT_CHANNEL,
    CHANNEL_APP_CHANNEL_CREATE_SUCCESS,
    CHANNEL_APP_CHANNEL_UPDATE_SUCCESS,
    CHANNEL_APP_CHANNEL_REMOVE_SUCCESS,
} from '../constants/actionTypes';

const defaultPrevState: EditedChannels = {
    showEditChannelModal: false,
    editedChannelId: null
};

export const showEditChannelModal = (prevState: EditedChannels = defaultPrevState, action: Action): EditedChannels => {
    switch (action.type) {
        case CHANNEL_APP_SHOW_EDIT_CHANNEL:
            return {
                editedChannelId: action.payload.id,
                showEditChannelModal: true,
            };
        case CHANNEL_APP_SHOW_CREATE_CHANNEL:
            return {
                editedChannelId: null,
                showEditChannelModal: true,
            };
        case CHANNEL_APP_CHANNEL_CREATE_SUCCESS:
        case CHANNEL_APP_CHANNEL_UPDATE_SUCCESS:
        case CHANNEL_APP_CHANNEL_REMOVE_SUCCESS:
        case CHANNEL_APP_HIDE_EDIT_CHANNEL:
            return {
                editedChannelId: null,
                showEditChannelModal: false,
            };
        default:
            return prevState;
    }
};


import {EditedChannels} from '../models/EditedChannels';
import {
    CHANNEL_APP_HIDE_EDIT_CHANNEL, CHANNEL_APP_SHOW_CREATE_CHANNEL,
    CHANNEL_APP_SHOW_EDIT_CHANNEL,
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

        case CHANNEL_APP_HIDE_EDIT_CHANNEL:
            return {
                editedChannelId: action.payload.id,
                showEditChannelModal: false,
            };
        case CHANNEL_APP_SHOW_CREATE_CHANNEL:
            return {
                editedChannelId: action.payload.id,
                showEditChannelModal: true,
            };
        default:
            return prevState;
    }
};


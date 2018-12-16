import {
    MESSAGE_APP_CREATE_MESSAGE_SUCCESS,
    MESSAGE_APP_CRUD_FAILURE,
    MESSAGE_APP_DOWNVOTE_MESSAGE_SUCCESS,
    MESSAGE_APP_UPDATE_MESSAGE_SUCCESS,
    MESSAGE_APP_UPVOTE_MESSAGE_SUCCESS,
    MESSAGE_APP_DELETE_MESSAGE_SUCCESS
} from '../constants/actionTypes';

import {CHANNEL_APP_SELECT_CHANNEL_SUCCESS} from '../../Channels/constants/actionTypes';

export const crudResponse = (prevState: string | undefined, action: Action): string | undefined => {
    switch (action.type) {
        case MESSAGE_APP_CRUD_FAILURE:
            return action.payload.message;
        case MESSAGE_APP_CREATE_MESSAGE_SUCCESS:
        case MESSAGE_APP_UPDATE_MESSAGE_SUCCESS:
        case MESSAGE_APP_UPVOTE_MESSAGE_SUCCESS:
        case MESSAGE_APP_DOWNVOTE_MESSAGE_SUCCESS:
        case MESSAGE_APP_DELETE_MESSAGE_SUCCESS:
        case CHANNEL_APP_SELECT_CHANNEL_SUCCESS:
            return undefined;
        default:
            return prevState;
    }
};

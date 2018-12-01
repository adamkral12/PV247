import {
    CHANNEL_APP_CRUD_FAILURE,
    CHANNEL_APP_CHANNEL_CREATE_SUCCESS,
    CHANNEL_APP_CHANNEL_REMOVE_SUCCESS,
    CHANNEL_APP_CHANNEL_UPDATE_SUCCESS, CHANNEL_APP_HIDE_EDIT_CHANNEL
} from '../constants/actionTypes';

export const crudResponse = (prevState: string | undefined, action: Action): string | undefined => {
    switch (action.type) {
        case CHANNEL_APP_CRUD_FAILURE:
            return action.payload.message;
        case CHANNEL_APP_CHANNEL_CREATE_SUCCESS:
        case CHANNEL_APP_CHANNEL_UPDATE_SUCCESS:
        case CHANNEL_APP_CHANNEL_REMOVE_SUCCESS:
        case CHANNEL_APP_HIDE_EDIT_CHANNEL:
            return undefined;
        default:
            return prevState;
    }
};

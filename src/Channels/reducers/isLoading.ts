import {
    CHANNEL_APP_CHANNEL_CREATE_SUCCESS, CHANNEL_APP_CHANNEL_REMOVE_SUCCESS, CHANNEL_APP_CHANNEL_UPDATE_SUCCESS,
    CHANNEL_APP_LOADING_FAILURE,
    CHANNEL_APP_LOADING_STARTED,
    CHANNEL_APP_LOADING_SUCCESS
} from '../constants/actionTypes';

export const isLoading = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case CHANNEL_APP_LOADING_STARTED:
            return true;
        case CHANNEL_APP_LOADING_SUCCESS:
        case CHANNEL_APP_LOADING_FAILURE:
        case CHANNEL_APP_CHANNEL_CREATE_SUCCESS:
        case CHANNEL_APP_CHANNEL_UPDATE_SUCCESS:
        case CHANNEL_APP_CHANNEL_REMOVE_SUCCESS:
            return false;
        default:
            return prevState;
    }
};

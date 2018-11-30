import {CHANNEL_APP_LIST_LOADING_FAILURE, CHANNEL_APP_LOADING_FAILURE, CHANNEL_APP_LOADING_STARTED, CHANNEL_APP_LOADING_SUCCESS} from '../constants/actionTypes';

export const isLoading = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case CHANNEL_APP_LOADING_STARTED:
            return true;
        case CHANNEL_APP_LOADING_SUCCESS:
        case CHANNEL_APP_LIST_LOADING_FAILURE:
        case CHANNEL_APP_LOADING_FAILURE:
            return false;
        default:
            return prevState;
    }
};

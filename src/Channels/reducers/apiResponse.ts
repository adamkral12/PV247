import {CHANNEL_APP_LIST_LOADING_FAILURE, CHANNEL_APP_LOADING_SUCCESS} from '../constants/actionTypes';

export const apiResponse = (prevState: string | undefined, action: Action): string | undefined => {
    switch (action.type) {
        case CHANNEL_APP_LOADING_SUCCESS:
            return undefined;
        case CHANNEL_APP_LIST_LOADING_FAILURE:
            return action.payload.message;
        default:
            return prevState;
    }
};

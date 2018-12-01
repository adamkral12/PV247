import {
    MESSAGE_APP_LOADING_FAILURE,
    MESSAGE_APP_LOADING_SUCCESS
} from '../constants/actionTypes';

export const loadMessagesRespone = (prevState: string | undefined, action: Action): string | undefined => {
    switch (action.type) {
        case MESSAGE_APP_LOADING_SUCCESS:
            return undefined;
        case MESSAGE_APP_LOADING_FAILURE:
            return action.payload.message;
        default:
            return prevState;
    }
};

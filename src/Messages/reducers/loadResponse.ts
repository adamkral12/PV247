
import {
    CHANNEL_APP_SELECT_CHANNEL_FAILURE,
    CHANNEL_APP_SELECT_CHANNEL_SUCCESS
} from '../../Channels/constants/actionTypes';
import {
    USER_APP_GET_USERS_FAILURE,
    USER_APP_GET_USERS_SUCCESS
} from '../../Users/constants/actionTypes';

export const loadResponse = (prevState: string | undefined, action: Action): string | undefined => {
    switch (action.type) {
        case USER_APP_GET_USERS_SUCCESS:
        case CHANNEL_APP_SELECT_CHANNEL_SUCCESS:

            return undefined;
        case CHANNEL_APP_SELECT_CHANNEL_FAILURE:
        case USER_APP_GET_USERS_FAILURE:
            return action.payload.message;
        default:
            return prevState;
    }
};

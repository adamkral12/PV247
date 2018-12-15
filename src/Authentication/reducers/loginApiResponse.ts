import {
    AUTHENTICATION_HIDE_LOGIN_MODAL,
    AUTHENTICATION_LOGIN_FAILURE
} from '../constants/actionTypes';
import {USER_APP_GET_USER_SUCCESS} from '../../Users/constants/actionTypes';

export const loginApiResponse = (prevState: string | undefined, action: Action): string | undefined => {
    switch (action.type) {
        case AUTHENTICATION_LOGIN_FAILURE:
            return action.payload.message;
        case USER_APP_GET_USER_SUCCESS:
        case AUTHENTICATION_HIDE_LOGIN_MODAL:
            return undefined;
        default:
            return prevState;
    }
};


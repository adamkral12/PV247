import {
    AUTHENTICATION_HIDE_REGISTRATION_MODAL,
    AUTHENTICATION_LOGIN_SUCCESS,
    AUTHENTICATION_LOGOUT,
    AUTHENTICATION_SWITCH_TO_REGISTRATION,
} from '../constants/actionTypes';
import {USER_APP_GET_USER_SUCCESS} from '../../Users/constants/actionTypes';


export const isLoggedIn = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case AUTHENTICATION_LOGOUT:
        case AUTHENTICATION_HIDE_REGISTRATION_MODAL:
        case AUTHENTICATION_SWITCH_TO_REGISTRATION:
            return false;
        case AUTHENTICATION_LOGIN_SUCCESS:
        case USER_APP_GET_USER_SUCCESS:
            return true;
        default:
            return prevState;
    }
};


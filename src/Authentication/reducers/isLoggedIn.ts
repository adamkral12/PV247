import {
    AUTHENTICATION_HIDE_REGISTRATION_MODAL,
    AUTHENTICATION_LOGIN,
    AUTHENTICATION_LOGOUT,
    AUTHENTICATION_SWITCH_TO_REGISTRATION,
} from '../constants/actionTypes';


export const isLoggedIn = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case AUTHENTICATION_LOGOUT:
            return false;
        case AUTHENTICATION_HIDE_REGISTRATION_MODAL:
        case AUTHENTICATION_LOGIN:
        case AUTHENTICATION_SWITCH_TO_REGISTRATION:
            return false;
        default:
            return prevState;
    }
};


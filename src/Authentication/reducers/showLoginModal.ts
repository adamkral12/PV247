import {
    AUTHENTICATION_HIDE_REGISTRATION_MODAL,
    AUTHENTICATION_LOGIN,
    AUTHENTICATION_LOGOUT,
    AUTHENTICATION_SHOW_REGISTRATION_MODAL, AUTHENTICATION_SWITCH_TO_REGISTRATION,
} from '../constants/actionTypes';


export const showLoginModal = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case AUTHENTICATION_SHOW_REGISTRATION_MODAL:
            return true;
        case AUTHENTICATION_HIDE_REGISTRATION_MODAL:
            return false;
        case AUTHENTICATION_LOGIN:
            return false;
        case AUTHENTICATION_LOGOUT:
            return true;
        case AUTHENTICATION_SWITCH_TO_REGISTRATION:
            return false;

        default:
            return prevState;
    }
};


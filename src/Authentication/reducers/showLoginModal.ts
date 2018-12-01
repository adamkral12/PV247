import {
    AUTHENTICATION_HIDE_LOGIN_MODAL, AUTHENTICATION_REGISTER_SUCCESS,
    AUTHENTICATION_SHOW_LOGIN_MODAL,
} from '../constants/actionTypes';


export const showLoginModal = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case AUTHENTICATION_SHOW_LOGIN_MODAL:
        case AUTHENTICATION_REGISTER_SUCCESS:
            return true;
        case AUTHENTICATION_HIDE_LOGIN_MODAL:
            return false;
        default:
            return prevState;
    }
};


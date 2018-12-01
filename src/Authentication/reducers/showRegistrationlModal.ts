import {
    AUTHENTICATION_HIDE_REGISTRATION_MODAL, AUTHENTICATION_REGISTER_SUCCESS,
    AUTHENTICATION_SHOW_REGISTRATION_MODAL,
} from '../constants/actionTypes';


export const showRegistrationModal = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case AUTHENTICATION_SHOW_REGISTRATION_MODAL:
            return true;
        case AUTHENTICATION_HIDE_REGISTRATION_MODAL:
        case AUTHENTICATION_REGISTER_SUCCESS:
            return false;
        default:
            return prevState;
    }
};


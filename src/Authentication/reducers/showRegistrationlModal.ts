import {
    AUTHENTICATION_HIDE_REGISTRATION_MODAL, AUTHENTICATION_REGISTER,
    AUTHENTICATION_SHOW_REGISTRATION_MODAL, AUTHENTICATION_SWITCH_TO_REGISTRATION,
} from '../constants/actionTypes';


export const showRegistrationModal = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case AUTHENTICATION_SHOW_REGISTRATION_MODAL:
            return true;
        case AUTHENTICATION_HIDE_REGISTRATION_MODAL:
            return false;
        case AUTHENTICATION_REGISTER:
            return false;
        case AUTHENTICATION_SWITCH_TO_REGISTRATION:
            return true;
        default:
            return prevState;
    }
};


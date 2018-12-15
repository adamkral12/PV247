import {
    AUTHENTICATION_HIDE_REGISTRATION_MODAL,
    AUTHENTICATION_REGISTER_FAILURE,
    AUTHENTICATION_REGISTER_SUCCESS
} from '../constants/actionTypes';

export const registrationApiResponse = (prevState: string | undefined, action: Action): string | undefined => {
    switch (action.type) {
        case AUTHENTICATION_REGISTER_FAILURE:
            return action.payload.message;
        case AUTHENTICATION_REGISTER_SUCCESS:
        case AUTHENTICATION_HIDE_REGISTRATION_MODAL:
            return undefined;
        default:
            return prevState;
    }
};

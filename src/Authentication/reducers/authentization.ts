import {AUTHENTICATION_LOGIN, AUTHENTICATION_LOGOUT, AUTHENTICATION_REGISTER} from '../constants/actionTypes';

export const authentization = (prevState: string, action: Action): string => {
    switch (action.type) {
        case AUTHENTICATION_LOGIN:
            return action.payload.email;
        case AUTHENTICATION_LOGOUT:
            return '';
        case AUTHENTICATION_REGISTER:
            return action.payload.email;
        default:
            return prevState;
    }
};

import {USER_APP_LOGIN, USER_APP_LOGOUT, USER_APP_REGISTER} from '../constants/actionTypes';

export const authentization = (prevState: string, action: Action): string => {
    switch (action.type) {
        case USER_APP_LOGIN:
            return action.payload.email;
        case USER_APP_LOGOUT:
            return '';
        case USER_APP_REGISTER:
            return action.payload.email;
        default:
            return prevState;
    }
};

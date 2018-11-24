import {USER_APP_LOGIN, USER_APP_LOGOUT, USER_APP_REGISTER} from '../constants/actionTypes';

export const login = (email: string): Action => ({
    type: USER_APP_LOGIN,
    payload: {
        email
    }
});


export const logout = (): Action => ({
    type: USER_APP_LOGOUT,
    payload: {
    }
});

export const register = (email: string): Action => ({
    type: USER_APP_REGISTER,
    payload: {
        email
    }
});


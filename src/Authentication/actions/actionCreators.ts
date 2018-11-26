import {
    AUTHENTICATION_HIDE_LOGIN_MODAL,
    AUTHENTICATION_HIDE_REGISTRATION_MODAL,
    AUTHENTICATION_SHOW_LOGIN_MODAL,
    AUTHENTICATION_SHOW_REGISTRATION_MODAL,
    AUTHENTICATION_LOGOUT,
    AUTHENTICATION_REGISTER, AUTHENTICATION_LOGIN_STARTED, AUTHENTICATION_LOGIN_FAILURE
} from '../constants/actionTypes';
import {Dispatch} from 'redux';
import {auth} from '../../api/service/AuthService';
import {AUTH_TOKEN_STORAGE_KEY} from '../../api/constants/api';
import {loadUser} from '../../Users/actions/user';

const loginStarted = (): Action => ({
    type: AUTHENTICATION_LOGIN_STARTED,
});

const loginFailure = (): Action => ({
    type: AUTHENTICATION_LOGIN_FAILURE,
});

export const login = (email: string): any =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch(loginStarted());
        try {
            const data = await auth(email);
            localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, data.token);
            console.log('are we loading?');
            dispatch(loadUser(email));
        } catch (e) {
            dispatch(loginFailure());
        }
    };



export const logout = (): Action => ({
    type: AUTHENTICATION_LOGOUT,
    payload: {
    }
});

export const register = (email: string): Action => ({
    type: AUTHENTICATION_REGISTER,
    payload: {
        email
    }
});

export const showLoginModal = (): Action => ({
    type: AUTHENTICATION_SHOW_LOGIN_MODAL,
});

export const hideLoginModal = (): Action => ({
    type: AUTHENTICATION_HIDE_LOGIN_MODAL,
});

export const showRegistrationModal = (): Action => ({
    type: AUTHENTICATION_SHOW_REGISTRATION_MODAL,
});

export const hideRegistrationModal = (): Action => ({
    type: AUTHENTICATION_HIDE_REGISTRATION_MODAL,
});

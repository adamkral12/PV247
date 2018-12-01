import {
    AUTHENTICATION_HIDE_LOGIN_MODAL,
    AUTHENTICATION_HIDE_REGISTRATION_MODAL,
    AUTHENTICATION_SHOW_LOGIN_MODAL,
    AUTHENTICATION_SHOW_REGISTRATION_MODAL,
    AUTHENTICATION_LOGOUT,
    AUTHENTICATION_LOGIN_STARTED, AUTHENTICATION_LOGIN_FAILURE
} from '../constants/actionTypes';
import {Dispatch} from 'redux';
import {auth} from '../../api/service/AuthService';
import {AUTH_EXPIRATION_STORAGE_KEY, AUTH_TOKEN_STORAGE_KEY, EMAIL_STORAGE_KEY} from '../../api/constants/api';
import {loadUser} from '../../Users/actions/user';

const loginStarted = (): Action => ({
    type: AUTHENTICATION_LOGIN_STARTED,
});

const loginFailure = (message: string): Action => ({
    type: AUTHENTICATION_LOGIN_FAILURE,
    payload: {
        message,
    }
});

export const logout = (): Action => ({
    type: AUTHENTICATION_LOGOUT,
});

export const login = (email: string): any =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch(loginStarted());
        try {
            const data = await auth(email);
            localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, data.token);
            localStorage.setItem(AUTH_EXPIRATION_STORAGE_KEY, data.expiration);
            localStorage.setItem(EMAIL_STORAGE_KEY, email);
            dispatch(loadUser(email));
        } catch (e) {
            dispatch(loginFailure(e.message));
        }
    };

export const checkIfLoggedIn = (): any =>
    async (dispatch: Dispatch): Promise<void> => {
        const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
        const expiration = localStorage.getItem(AUTH_EXPIRATION_STORAGE_KEY);
        const email = localStorage.getItem(EMAIL_STORAGE_KEY);
        if (!token || !expiration || !email) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(expiration);
            // expired token
            if (new Date() > expirationDate) {
                dispatch(logout());
            } else {
                dispatch(loadUser(email));
            }
        }
    };

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

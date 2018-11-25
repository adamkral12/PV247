import {
    AUTHENTICATION_HIDE_LOGIN_MODAL,
    AUTHENTICATION_HIDE_REGISTRATION_MODAL,
    AUTHENTICATION_SHOW_LOGIN_MODAL,
    AUTHENTICATION_SHOW_REGISTRATION_MODAL,
    AUTHENTICATION_LOGIN,
    AUTHENTICATION_LOGOUT,
    AUTHENTICATION_REGISTER, AUTHENTICATION_SWITCH_TO_REGISTRATION
} from '../constants/actionTypes';

export const login = (email: string): Action => ({
    type: AUTHENTICATION_LOGIN,
    payload: {
        email
    }
});


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

export const switchToRegistration = (): Action => ({
    type: AUTHENTICATION_SWITCH_TO_REGISTRATION,
    payload: {
    }
});

export const showLoginModal = (): Action => ({
    type: AUTHENTICATION_SHOW_LOGIN_MODAL,
    payload: {
    }
});

export const hideLoginModal = (): Action => ({
    type: AUTHENTICATION_HIDE_LOGIN_MODAL,
    payload: {
    }
});

export const showRegistrationModal = (): Action => ({
    type: AUTHENTICATION_SHOW_REGISTRATION_MODAL,
    payload: {
    }
});

export const hideRegistrationModal = (): Action => ({
    type: AUTHENTICATION_HIDE_REGISTRATION_MODAL,
    payload: {
    }
});

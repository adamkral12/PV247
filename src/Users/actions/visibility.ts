import {
    USER_APP_HIDE_EDIT_USER_MODAL,
    USER_APP_SHOW_EDIT_USER_MODAL
} from '../constants/actionTypes';

export const showEditUser = (): Action => ({
    type: USER_APP_SHOW_EDIT_USER_MODAL,
});

export const hideEditUser = (): Action => ({
    type: USER_APP_HIDE_EDIT_USER_MODAL,
});

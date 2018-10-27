import {USER_APP_HIDE_EDIT_USER_MODAL, USER_APP_SHOW_EDIT_USER_MODAL, USER_APP_EDIT_USER} from '../constants/actionTypes';
//import {IUser} from "../../Channels/models/IUser";

export const showEditUser = (): Action => ({
    type: USER_APP_SHOW_EDIT_USER_MODAL,
    payload: {
        show: true,
    }
});

export const hideEditUser = (): Action => ({
    type: USER_APP_HIDE_EDIT_USER_MODAL,
    payload: {
        show: false,
    }
});

export const editUser = (profilePicture: string, displayName: string): Action => ({
    type: USER_APP_EDIT_USER,
    payload: {
        profilePicture: profilePicture,
        displayName: displayName,
        show: false
    }
});

import {
    USER_APP_EDIT_USER,
    USER_APP_HIDE_EDIT_USER_MODAL, USER_APP_SHOW_EDIT_USER_MODAL,
} from '../constants/actionTypes';
const defaultPrevState: boolean = false;

export const showEditUserModal = (prevState: boolean = defaultPrevState, action: Action): boolean => {
    switch (action.type) {
        case USER_APP_SHOW_EDIT_USER_MODAL:
            return true;

        case USER_APP_HIDE_EDIT_USER_MODAL:
        case USER_APP_EDIT_USER:
            return false;
        default:
            return prevState;
    }
};


import {USER_APP_HIDE_EDIT_USER_MODAL, USER_APP_SHOW_EDIT_USER_MODAL} from '../constants/actionTypes';

export const editUserModal = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case USER_APP_SHOW_EDIT_USER_MODAL:
        case USER_APP_HIDE_EDIT_USER_MODAL:
           return action.payload.show;
        default:
            return prevState;
    }
};

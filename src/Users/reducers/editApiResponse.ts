import {USER_APP_EDIT_USER_FAILURE, USER_APP_EDIT_USER_SUCCESS, USER_APP_HIDE_EDIT_USER_MODAL} from '../constants/actionTypes';

export const editUserApiResponse = (prevState: string | undefined, action: Action): string | undefined => {
    switch (action.type) {
        case USER_APP_EDIT_USER_FAILURE:
            return action.payload.message;
        case USER_APP_EDIT_USER_SUCCESS:
        case USER_APP_HIDE_EDIT_USER_MODAL:
            return undefined;
        default:
            return prevState;
    }
};


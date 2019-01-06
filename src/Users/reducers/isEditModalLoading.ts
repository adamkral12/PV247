import {USER_APP_EDIT_USER_FAILURE, USER_APP_EDIT_USER_STARTED, USER_APP_EDIT_USER_SUCCESS} from '../constants/actionTypes';


export const isEditModalLoading = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case USER_APP_EDIT_USER_STARTED:
            return true;
        case USER_APP_EDIT_USER_SUCCESS:
        case USER_APP_EDIT_USER_FAILURE:
            return false;
        default:
            return prevState;
    }
};

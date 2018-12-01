import {AUTHENTICATION_REGISTER_FAILURE, AUTHENTICATION_REGISTER_STARTED, AUTHENTICATION_REGISTER_SUCCESS} from '../constants/actionTypes';

export const isLoading = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case AUTHENTICATION_REGISTER_STARTED:
            return true;
        case AUTHENTICATION_REGISTER_SUCCESS:
        case AUTHENTICATION_REGISTER_FAILURE:
            return false;
        default:
            return prevState;
    }
};

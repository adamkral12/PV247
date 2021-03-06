import {
    MESSAGE_APP_CREATE_MESSAGE_SUCCESS, MESSAGE_APP_CRUD_FAILURE,
    MESSAGE_APP_DELETE_MESSAGE_SUCCESS,
    MESSAGE_APP_DOWNVOTE_MESSAGE_SUCCESS, MESSAGE_APP_LOADING_FAILURE,
    MESSAGE_APP_LOADING_STARTED,
    MESSAGE_APP_LOADING_SUCCESS,
    MESSAGE_APP_UPDATE_MESSAGE_SUCCESS,
    MESSAGE_APP_UPVOTE_MESSAGE_SUCCESS
} from '../constants/actionTypes';
import {
    USER_APP_GET_USERS_FAILURE,
    USER_APP_GET_USERS_STARTED,
    USER_APP_GET_USERS_SUCCESS
} from '../../Users/constants/actionTypes';

export const isLoading = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case MESSAGE_APP_LOADING_STARTED:
        case USER_APP_GET_USERS_STARTED:
            return true;
        case MESSAGE_APP_LOADING_SUCCESS:
        case MESSAGE_APP_LOADING_FAILURE:
        case MESSAGE_APP_CREATE_MESSAGE_SUCCESS:
        case MESSAGE_APP_UPDATE_MESSAGE_SUCCESS:
        case MESSAGE_APP_UPVOTE_MESSAGE_SUCCESS:
        case MESSAGE_APP_DOWNVOTE_MESSAGE_SUCCESS:
        case MESSAGE_APP_DELETE_MESSAGE_SUCCESS:
        case MESSAGE_APP_CRUD_FAILURE:
        case USER_APP_GET_USERS_SUCCESS:
        case USER_APP_GET_USERS_FAILURE:
            return false;
        default:
            return prevState;
    }
};

import { Dispatch } from 'redux';
import {
    USER_APP_GET_USERS_STARTED,
    USER_APP_GET_USERS_FAILURE,
    USER_APP_GET_USERS_SUCCESS,
} from '../constants/actionTypes';
import {IUser} from '../../Channels/models/IUser';
import {UserService} from '../../api/service/UserService';

const loadingStarted = (): Action => ({
    type: USER_APP_GET_USERS_STARTED,
});

const loadingSuccess = (users: ReadonlyArray<IUser>): Action => ({
    type: USER_APP_GET_USERS_SUCCESS,
    payload: {
        users,
    }
});

const loadingFailure = (message: string): Action => ({
    type: USER_APP_GET_USERS_FAILURE,
    payload: {
        message,
    }
});

export const loadUsers = (): any =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch(loadingStarted());
        try {
            const users = await UserService.getAllEntities();
            dispatch(loadingSuccess(users));
        } catch (e) {
            dispatch(loadingFailure(e.message));
        }
    };

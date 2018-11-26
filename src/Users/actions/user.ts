import {IUser} from '../../Channels/models/IUser';
import {Dispatch} from 'redux';
import {UserService} from '../../api/service/UserService';
import {USER_APP_GET_USER_FAILURE, USER_APP_GET_USER_STARTED, USER_APP_GET_USER_SUCCESS} from '../constants/actionTypes';

const loadingStarted = (): Action => ({
    type: USER_APP_GET_USER_STARTED,
});

const loadingSuccess = (user: IUser): Action => ({
    type: USER_APP_GET_USER_SUCCESS,
    payload: {
        user,
    }
});

const loadingFailure = (message: string): Action => ({
    type: USER_APP_GET_USER_FAILURE,
    payload: {
        message,
    }
});

export const loadUser = (email: string): any =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch(loadingStarted());
        try {
            console.log("we loading");
            const user = await new UserService().getEntity(email);
            dispatch(loadingSuccess(user));
        } catch (e) {
            dispatch(loadingFailure(e.message));
        }
    };

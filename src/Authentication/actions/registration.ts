import {AUTHENTICATION_REGISTER_FAILURE, AUTHENTICATION_REGISTER_STARTED, AUTHENTICATION_REGISTER_SUCCESS} from '../constants/actionTypes';
import {Dispatch} from 'redux';
import {UserService} from '../../api/service/UserService';
import {IUser} from '../../Channels/models/IUser';

export const registerStarted = (): Action => ({
    type: AUTHENTICATION_REGISTER_STARTED,
});

export const registerFailed = (message: string): Action => ({
    type: AUTHENTICATION_REGISTER_FAILURE,
    payload: {
        message,
    }
});

const createUser = (user: IUser): Action => ({
    type: AUTHENTICATION_REGISTER_SUCCESS,
    payload: {
        user,
    }
});

export const register = (email: string, displayName: string): any =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch(registerStarted());
        try {
            const userToCreate: IUser = {
                email,
                customData: {
                    profilePicture: '',
                    displayName,
                }
            };
            const user = await UserService.createEntity(userToCreate);
            dispatch(createUser(user));
        } catch (e) {
            dispatch(registerFailed(e.message));
        }
    };

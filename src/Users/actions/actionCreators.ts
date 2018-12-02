import {USER_APP_HIDE_EDIT_USER_MODAL, USER_APP_SHOW_EDIT_USER_MODAL, USER_APP_EDIT_USER_SUCCESS, USER_APP_EDIT_USER_START, USER_APP_EDIT_USER_FAILURE} from '../constants/actionTypes';
import {Dispatch} from 'redux';
import {IState} from '../../common/IState';
import {IUser} from '../../Channels/models/IUser';
import {UserService} from '../../api/service/UserService';

export const showEditUser = (): Action => ({
    type: USER_APP_SHOW_EDIT_USER_MODAL,
});

export const hideEditUser = (): Action => ({
    type: USER_APP_HIDE_EDIT_USER_MODAL,
});

const startEditingUser = (): Action => ({
    type: USER_APP_EDIT_USER_START,
});

const editUserSuccess = (user: IUser): Action => ({
    type: USER_APP_EDIT_USER_SUCCESS,
    payload: {
        user,
    }
});

const editUserFailure = (message: string): Action => ({
    type: USER_APP_EDIT_USER_FAILURE,
    payload: {
        message,
    }
});

export const editUser = (profilePicture: string, displayName: string): any =>
    async (dispatch: Dispatch, getState: () => IState): Promise<void> => {
        dispatch(startEditingUser());
        try {
            const currentUser = getState().userApp.user;
            const userToEdit: IUser = {
                ...currentUser,
                customData: {
                    ...currentUser.customData, profilePicture, displayName
                }
            };
            const user = await UserService.editEntity(userToEdit);
            console.log(userToEdit);
            dispatch(editUserSuccess(user));
        } catch (e) {
            dispatch(editUserFailure(e.message));
        }
    };

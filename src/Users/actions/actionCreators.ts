import {USER_APP_HIDE_EDIT_USER_MODAL, USER_APP_SHOW_EDIT_USER_MODAL, USER_APP_EDIT_USER_SUCCESS, USER_APP_EDIT_USER_START, USER_APP_EDIT_USER_FAILURE} from '../constants/actionTypes';
import {Dispatch} from 'redux';
import {IState} from '../../common/IState';
import {IUser} from '../../Channels/models/IUser';
import {UserService} from '../../api/service/UserService';
import {Pv247Service} from '../../api/service/Pv247Service';

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

export const editUser = (profilePicture: File | null, displayName: string): any =>
    async (dispatch: Dispatch, getState: () => IState): Promise<void> => {
        if (!/\S/.test(displayName)) {
            dispatch(editUserFailure('User name can not be empty.'));
        }
        else {
            dispatch(startEditingUser());
            try {
                const currentUser = getState().userApp.user;
                let userWithFile;
                let file;
                if (profilePicture) {
                    file = await Pv247Service.uploadFile(profilePicture);
                    if (file) {
                        const getFile = await Pv247Service.getFile(file[0].id);
                        userWithFile = {
                            ...currentUser,
                            customData: {
                                ...currentUser.customData, profilePicture: getFile.fileUri,
                            }
                        };
                    }
                }

                const userToEdit: IUser = {
                    ...(userWithFile ? userWithFile : currentUser),
                    customData: {
                        ...(userWithFile ? userWithFile : currentUser).customData, displayName
                    }
                };
                const user = await UserService.editEntity(userToEdit);
                dispatch(editUserSuccess(user));
            } catch (e) {
                dispatch(editUserFailure(e.message));
            }
        }
    };

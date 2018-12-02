import {IUserApp} from '../model/IUserApp';
import {showEditUserModal} from './showEditUserModal';
import {users} from './users';
import {user} from './user';
import {isEditModalLoading} from './isEditModalLoading';
import {editUserApiResponse} from './editApiResponse';

export const userApp = (prevState = {} as IUserApp, action: Action): IUserApp => ({
    users: users(prevState.users, action),
    user: user(prevState.user, action),
    showEditUserModal: showEditUserModal(prevState.showEditUserModal, action),
    isEditModalLoading: isEditModalLoading(prevState.isEditModalLoading, action),
    apiErrorResponse: editUserApiResponse(prevState.apiErrorResponse, action),
});

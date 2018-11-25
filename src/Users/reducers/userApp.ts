import {IUserApp} from '../model/IUserApp';
import {showEditUserModal} from './showEditUserModal';
import {users} from './users';

export const userApp = (prevState = {} as IUserApp, action: Action): IUserApp => ({
    users: users(prevState.users, action),
    showEditUserModal: showEditUserModal(prevState.showEditUserModal, action),
});

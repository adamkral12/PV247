import {IUserApp} from '../model/IUserApp';
import {showEditUserModal} from './showEditUserModal';
import {users} from './users';
import {user} from './user';

export const userApp = (prevState = {} as IUserApp, action: Action): IUserApp => ({
    users: users(prevState.users, action),
    user: user(prevState.user, action),
    showEditUserModal: showEditUserModal(prevState.showEditUserModal, action),
});

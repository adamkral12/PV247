import {IUserApp} from '../model/IUserApp';
import {showEditUserModal} from './showEditUserModal';
import {users} from './users';
import {authentization} from '../../Authentication/reducers/authentization';

export const userApp = (prevState = {} as IUserApp, action: Action): IUserApp => ({
    userEmail: authentization(prevState.userEmail, action),
    users: users(prevState.users, action),
    showEditUserModal: showEditUserModal(prevState.showEditUserModal, action)
});

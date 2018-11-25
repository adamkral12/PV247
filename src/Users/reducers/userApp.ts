import {IUserApp} from '../model/IUserApp';
import {showEditUserModal} from './showEditUserModal';
import {users} from './users';
import {showRegistrationModal} from '../../Authentication/reducers/showRegistrationlModal';
import {showLoginModal} from '../../Authentication/reducers/showLoginModal';

export const userApp = (prevState = {} as IUserApp, action: Action): IUserApp => ({
    users: users(prevState.users, action),
    showEditUserModal: showEditUserModal(prevState.showEditUserModal, action),
    showLoginModal: showLoginModal(prevState.showLoginModal, action),
    showRegistrationModal: showRegistrationModal(prevState.showRegistrationModal, action)
});

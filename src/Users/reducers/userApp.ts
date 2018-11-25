import {IUserApp} from '../model/IUserApp';
import {showEditUserModal} from './showEditUserModal';
import {users} from './users';
import {authentization} from '../../Authentication/reducers/authentization';
import {showRegistrationModal} from '../../Authentication/reducers/showRegistrationlModal';
import {showLoginModal} from '../../Authentication/reducers/showLoginModal';

export const userApp = (prevState = {} as IUserApp, action: Action): IUserApp => ({
    userEmail: authentization(prevState.userEmail, action),
    users: users(prevState.users, action),
    showEditUserModal: showEditUserModal(prevState.showEditUserModal, action),
    showLoginModal: showLoginModal(prevState.showLoginModal, action),
    showRegistrationModal: showRegistrationModal(prevState.showRegistrationModal, action)
});

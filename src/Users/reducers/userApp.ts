import {IUserApp} from '../model/IUserApp';
import {user} from '../../Messages/reducers/user';
import {editUserModal} from './editUserModal';

export const userApp = (prevState: IUserApp, action: Action): IUserApp => ({
    // TODO: used reducer from messages, should prob. create new one
    user: user(prevState.user, action),
    showEditModal: editUserModal(prevState.showEditModal, action),
});

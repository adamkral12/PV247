import {mockStore} from '../../utils/mockStore';
import {hideEditUser, showEditUser} from '../../../Users/actions/visibility';
import {USER_APP_HIDE_EDIT_USER_MODAL, USER_APP_SHOW_EDIT_USER_MODAL} from '../../../Users/constants/actionTypes';

describe('edit user modal visibility action', () => {

    it('dispatch hide edit user', () => {
        const store = mockStore();
        store.dispatch(hideEditUser());
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: USER_APP_HIDE_EDIT_USER_MODAL});
    });

    it('dispatch show edit user', () => {
        const store = mockStore();
        store.dispatch(showEditUser());
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: USER_APP_SHOW_EDIT_USER_MODAL});
    });
});

import {showEditUserModal} from '../../../Users/reducers/showEditUserModal';
import {USER_APP_EDIT_USER_SUCCESS, USER_APP_SHOW_EDIT_USER_MODAL} from '../../../Users/constants/actionTypes';

describe('show edit user modal reducer', () => {
    it('show edit user modal should return true', () => {
        expect(showEditUserModal(undefined, {
            type: USER_APP_SHOW_EDIT_USER_MODAL // is this ok
        })).toEqual(true);
    });

    it('edit channel should return false', () => {
        expect(showEditUserModal(undefined, {
            type: USER_APP_EDIT_USER_SUCCESS,
        })).toEqual(false);
    });
});

import {editUserApiResponse} from '../../../Users/reducers/editApiResponse';
import {
    USER_APP_EDIT_USER_FAILURE,
    USER_APP_EDIT_USER_SUCCESS,
    USER_APP_HIDE_EDIT_USER_MODAL
} from '../../../Users/constants/actionTypes';

describe('edit user api response reducer', () => {
    it('test edit user failure', () => {
        expect(editUserApiResponse(undefined, {
            type: USER_APP_EDIT_USER_FAILURE,
            payload: { message: 'could not update user' }
        })).toEqual('could not update user');
    });

    const actionsThatShouldReturnUndefined = [
        USER_APP_EDIT_USER_SUCCESS,
        USER_APP_HIDE_EDIT_USER_MODAL
    ];

    actionsThatShouldReturnUndefined.map((action: string) => {
        it('test ' + action + ' returning undefined', () => {
            expect(editUserApiResponse('could not update user', {
                type: action,
            })).toEqual(undefined);
        });
    });


});

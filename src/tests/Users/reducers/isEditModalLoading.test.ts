import {isEditModalLoading} from '../../../Users/reducers/isEditModalLoading';
import {
    USER_APP_EDIT_USER_FAILURE,
    USER_APP_EDIT_USER_START,
    USER_APP_EDIT_USER_SUCCESS,
} from '../../../Users/constants/actionTypes';

describe('is user loading reducer', () => {
    it('action loading started', () => {
        expect(isEditModalLoading(false, {
            type: USER_APP_EDIT_USER_START,
        })).toEqual(true);
    });

    const notLoadingActions = [
        USER_APP_EDIT_USER_SUCCESS,
        USER_APP_EDIT_USER_FAILURE,
    ];
    notLoadingActions.map((action: string) => {
        it('not loading action: ' + action, () => {
            expect(isEditModalLoading(true, {
                type: action
            })).toEqual(false);
        });
    });
});

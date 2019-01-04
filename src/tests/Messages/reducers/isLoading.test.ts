import {isLoading} from '../../../Messages/reducers/isLoading';
import {
    MESSAGE_APP_CREATE_MESSAGE_SUCCESS, MESSAGE_APP_CRUD_FAILURE, MESSAGE_APP_DELETE_MESSAGE_SUCCESS,
    MESSAGE_APP_DOWNVOTE_MESSAGE_SUCCESS,
    MESSAGE_APP_LOADING_FAILURE,
    MESSAGE_APP_LOADING_STARTED,
    MESSAGE_APP_LOADING_SUCCESS,
    MESSAGE_APP_UPDATE_MESSAGE_SUCCESS,
    MESSAGE_APP_UPVOTE_MESSAGE_SUCCESS
} from '../../../Messages/constants/actionTypes';

describe('is message loading reducer', () => {
    it('action loading started', () => {
        expect(isLoading(false, {
            type: MESSAGE_APP_LOADING_STARTED,
        })).toEqual(true);
    });

    const notLoadingActions = [
        MESSAGE_APP_LOADING_SUCCESS,
        MESSAGE_APP_LOADING_FAILURE,
        MESSAGE_APP_CREATE_MESSAGE_SUCCESS,
        MESSAGE_APP_UPDATE_MESSAGE_SUCCESS,
        MESSAGE_APP_UPVOTE_MESSAGE_SUCCESS,
        MESSAGE_APP_DOWNVOTE_MESSAGE_SUCCESS,
        MESSAGE_APP_DELETE_MESSAGE_SUCCESS,
        MESSAGE_APP_CRUD_FAILURE,
    ];
    notLoadingActions.map((action: string) => {
        it('not loading action: ' + action, () => {
            expect(isLoading(true, {
                type: action
            })).toEqual(false);
        });
    });
});

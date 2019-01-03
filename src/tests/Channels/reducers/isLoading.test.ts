import {isLoading} from '../../../Channels/reducers/isLoading';
import {
    CHANNEL_APP_CHANNEL_CREATE_SUCCESS,
    CHANNEL_APP_CHANNEL_REMOVE_SUCCESS,
    CHANNEL_APP_CHANNEL_UPDATE_SUCCESS,
    CHANNEL_APP_LOADING_FAILURE,
    CHANNEL_APP_LOADING_STARTED,
    CHANNEL_APP_LOADING_SUCCESS
} from '../../../Channels/constants/actionTypes';

describe('is channel loading reducer', () => {
    it('action loading started', () => {
        expect(isLoading(false, {
            type: CHANNEL_APP_LOADING_STARTED,
        })).toEqual(true);
    });

    const notLoadingActions = [
        CHANNEL_APP_LOADING_SUCCESS,
        CHANNEL_APP_LOADING_FAILURE,
        CHANNEL_APP_CHANNEL_CREATE_SUCCESS,
        CHANNEL_APP_CHANNEL_UPDATE_SUCCESS,
        CHANNEL_APP_CHANNEL_REMOVE_SUCCESS,
    ];
    notLoadingActions.map((action: string) => {
        it('not loading action: ' + action, () => {
            expect(isLoading(true, {
                type: action
            })).toEqual(false);
        });
    });
});

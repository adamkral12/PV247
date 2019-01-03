import {loadingChannelsResponse} from '../../../Channels/reducers/loadingChannelsResponse';
import {CHANNEL_APP_LOADING_FAILURE, CHANNEL_APP_LOADING_SUCCESS} from '../../../Channels/constants/actionTypes';

describe('loading channels response reducer', () => {
    it('loading success should return undefined', () => {
        expect(loadingChannelsResponse('previous failure message', {
            type: CHANNEL_APP_LOADING_SUCCESS
        })).toEqual(undefined);
    });

    it('loading failure should return message', () => {
        expect(loadingChannelsResponse(undefined, {
            type: CHANNEL_APP_LOADING_FAILURE,
            payload: {
                message: 'Could not load channel app'
            }
        })).toEqual('Could not load channel app');
    });
});

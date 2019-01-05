import {CHANNEL_APP_SELECT_CHANNEL_FAILURE, CHANNEL_APP_SELECT_CHANNEL_SUCCESS} from '../../../Channels/constants/actionTypes';
import {loadMessagesResponse} from '../../../Messages/reducers/loadMessagesResponse';

describe('load message response reducer test', () => {
    it('select channel success should return undefined', () => {
        expect(loadMessagesResponse('Could not load', {
            type: CHANNEL_APP_SELECT_CHANNEL_SUCCESS,
        })).toEqual(undefined);
    });

    it('select channel failure should return message', () => {
        expect(loadMessagesResponse(undefined, {
            type: CHANNEL_APP_SELECT_CHANNEL_FAILURE,
            payload: { message: 'channel could not be selected'}
        })).toEqual('channel could not be selected');
    });
});

import {selectedChannelId} from '../../../Channels/reducers/selectedChannelId';
import {CHANNEL_APP_CHANNEL_REMOVE_SUCCESS, CHANNEL_APP_SELECT_CHANNEL_SUCCESS} from '../../../Channels/constants/actionTypes';

describe('selected channel id reducer', () => {
    it('successful selection should return channel id', () => {
        expect(selectedChannelId('', {
            type: CHANNEL_APP_SELECT_CHANNEL_SUCCESS,
            payload: {
                id: '1312-3123-sfa'
            }
        })).toEqual('1312-3123-sfa');
    });

    it('removing selected channel should return empty string', () => {
        expect(selectedChannelId('123', {
            type: CHANNEL_APP_CHANNEL_REMOVE_SUCCESS,
            payload: {
                channelId: '123'
            }
        })).toEqual('');
    });

    it('removing unselected channel should return prev state', () => {
        expect(selectedChannelId('123', {
            type: CHANNEL_APP_CHANNEL_REMOVE_SUCCESS,
            payload: {
                channelId: '321'
            }
        })).toEqual('123');
    });
});

import {showEditChannelModal} from '../../../Channels/reducers/showEditChannelModal';
import {CHANNEL_APP_CHANNEL_CREATE_SUCCESS, CHANNEL_APP_SHOW_EDIT_CHANNEL} from '../../../Channels/constants/actionTypes';

describe('show edit channel modal reducer', () => {
    it('show edit channel modal should return true and channel id', () => {
        expect(showEditChannelModal(undefined, {
            type: CHANNEL_APP_SHOW_EDIT_CHANNEL,
            payload: {
                id: '123'
            }
        })).toEqual({
            showEditChannelModal: true,
            editedChannelId: '123',
        });
    });

    it('show create channel modal should return true and channel id', () => {
        expect(showEditChannelModal(undefined, {
            type: CHANNEL_APP_SHOW_EDIT_CHANNEL,
            payload: {
                id: '123'
            }
        })).toEqual({
            showEditChannelModal: true,
            editedChannelId: '123',
        });
    });

    it('create channel should return null & false', () => {
        expect(showEditChannelModal(undefined, {
            type: CHANNEL_APP_CHANNEL_CREATE_SUCCESS,
        })).toEqual({
            editedChannelId: null,
            showEditChannelModal: false,
        });
    });
});

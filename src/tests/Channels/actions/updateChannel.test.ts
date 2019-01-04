import * as fetchMock from 'fetch-mock';
import {BASE_API_URL} from '../../../api/constants/api';
import {mockStore} from '../../utils/mockStore';
import * as Immutable from 'immutable';
import {CHANNEL_APP_CHANNEL_UPDATE_SUCCESS, CHANNEL_APP_CRUD_FAILURE, CHANNEL_APP_LOADING_STARTED} from '../../../Channels/constants/actionTypes';
import {updateChannel} from '../../../Channels/actions/updateChannel';
import {extendedUrl} from '../../../api/service/ChannelService';
import {IChannel} from '../../../Channels/models/IChannel';

const channel: IChannel = {
    id: '123',
    name: 'not yet updated',
    customData: {
        members: Immutable.Set(['author']),
        image: null
    }
};

const updatedChannel: IChannel = {
    id: '123',
    name: 'updated channel',
    customData: {
        members: Immutable.Set(['added', 'author']),
        image: null
    }
};

const initialState = {
    channelList: {
        channels: {
            byId: Immutable.Map().set(channel.id, channel)
        }
    }
};

describe('update channel action', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should dispatch failure when name is empty', async () => {
        fetchMock.mock(BASE_API_URL + extendedUrl, {status: 400});
        const store = mockStore();
        await store.dispatch(updateChannel('1232131', '   ', {
            invitedUsers: Immutable.Set([]),
            image: null,
        }));

        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CHANNEL_APP_LOADING_STARTED});
        expect(actions[1]).toEqual({type: CHANNEL_APP_CRUD_FAILURE, payload: {message: 'Channel name can\'t be empty'}});
    });

    it('should dispatch success when API call is successful', async () => {
        fetchMock.mock(BASE_API_URL + extendedUrl + '123', {status: 200, body: updatedChannel});
        const store = mockStore(initialState);
        await store.dispatch(updateChannel('123', 'updated channel', {
            invitedUsers: Immutable.Set(['added']),
            image: null,
        }));

        const actions = store.getActions();

        expect(actions[0]).toEqual({type: CHANNEL_APP_LOADING_STARTED});
        expect(actions[1]).toEqual({type: CHANNEL_APP_CHANNEL_UPDATE_SUCCESS,
            payload: {channel: updatedChannel}
        });
    });
});

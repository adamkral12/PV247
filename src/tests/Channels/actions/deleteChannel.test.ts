import {IChannel} from '../../../Channels/models/IChannel';
import * as Immutable from 'immutable';
import * as fetchMock from 'fetch-mock';
import {BASE_API_URL} from '../../../api/constants/api';
import {extendedUrl} from '../../../api/service/ChannelService';
import {mockStore} from '../../utils/mockStore';
import {CHANNEL_APP_CHANNEL_REMOVE_SUCCESS, CHANNEL_APP_CRUD_FAILURE, CHANNEL_APP_LOADING_STARTED} from '../../../Channels/constants/actionTypes';
import {deleteChannel} from '../../../Channels/actions/deleteChannel';

const channel: IChannel = {
    id: '123',
    name: 'not yet updated',
    customData: {
        members: Immutable.Set(['author']),
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

describe('delete channel action', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should dispatch crud failure when api call fails', async () => {
        fetchMock.mock(BASE_API_URL + extendedUrl + '123', {status: 400});
        const store = mockStore(initialState);
        await store.dispatch(deleteChannel('123'));
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CHANNEL_APP_LOADING_STARTED});
        expect(actions[1]).toEqual({type: CHANNEL_APP_CRUD_FAILURE, payload: {message: 'An error occurred while deleting the channel.'}});
    });

    it('should dispatch success when api call is successful', async () => {
        fetchMock.mock(BASE_API_URL + extendedUrl + '123', {status: 204});
        const store = mockStore(initialState);
        await store.dispatch(deleteChannel('123'));
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CHANNEL_APP_LOADING_STARTED});
        expect(actions[1]).toEqual({type: CHANNEL_APP_CHANNEL_REMOVE_SUCCESS, payload: {channelId: '123'}});
    });
});

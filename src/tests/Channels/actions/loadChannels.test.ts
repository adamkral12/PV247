import {mockStore} from '../../utils/mockStore';
import {loadChannels} from '../../../Channels/actions/loadChannels';
import {CHANNEL_APP_LOADING_FAILURE, CHANNEL_APP_LOADING_STARTED, CHANNEL_APP_LOADING_SUCCESS} from '../../../Channels/constants/actionTypes';
import * as fetchMock from 'fetch-mock';
import {extendedUrl} from '../../../api/service/ChannelService';
import {BASE_API_URL} from '../../../api/constants/api';

describe('loading channels action', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should dispatch failure - error message when API failed', async () => {
        fetchMock.mock(BASE_API_URL + extendedUrl, 400);
        const store = mockStore();
        await store.dispatch(loadChannels());
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CHANNEL_APP_LOADING_STARTED});
        expect(actions[1]).toEqual({type: CHANNEL_APP_LOADING_FAILURE, payload: {message: 'Bad Request'}});
    });

    it('should dispatch channels on success', async () => {
        fetchMock.mock(
            BASE_API_URL + extendedUrl,
            {
                status: 200,
                body: [
                        { id: 1, name: 'new channel' },
                    ],
            });

        const store = mockStore();
        await store.dispatch(loadChannels());
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CHANNEL_APP_LOADING_STARTED});
        expect(actions[1]).toEqual({type: CHANNEL_APP_LOADING_SUCCESS, payload: {
            channels: [
                { id: 1, name: 'new channel' },
            ]}});

    });
});

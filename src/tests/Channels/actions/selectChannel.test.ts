import * as fetchMock from 'fetch-mock';
import {BASE_API_URL} from '../../../api/constants/api';
import {extendedUrl} from '../../../api/service/MessageService';
import {mockStore} from '../../utils/mockStore';
import {selectChannel} from '../../../Channels/actions/selectChannel';
import {CHANNEL_APP_LOADING_STARTED, CHANNEL_APP_SELECT_CHANNEL_FAILURE, CHANNEL_APP_SELECT_CHANNEL_SUCCESS} from '../../../Channels/constants/actionTypes';

describe('select channel action', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should invoke error when getting messages failed', async () => {
        const channelId = 'channelId';
        fetchMock.mock(BASE_API_URL +  extendedUrl + channelId + '/' + 'message', {status: 400});
        const store = mockStore();

        await store.dispatch(selectChannel(channelId));
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CHANNEL_APP_LOADING_STARTED});
        expect(actions[1]).toEqual({type: CHANNEL_APP_SELECT_CHANNEL_FAILURE, payload: {message: 'Error while selecting channel'}});
    });

    it ('should invoke success with ordered messages when getting messages was successful', async () => {
        const channelId = 'channelId';
        fetchMock.mock(BASE_API_URL +  extendedUrl + channelId + '/' + 'message',
            {
                status: 200,
                body: [
                    {
                        id: 'uuid1',
                        channelId,
                        value: 'this should be second message',
                        createdAt: '2018-12-28T13:48:20.0714341Z',
                        createdBy: 'adamko',
                        updatedAt: null,
                        updatedBy: null,
                        customData: {
                            votes: 0
                        }
                    },
                    {
                        id: 'uuid1',
                        channelId,
                        value: 'this should be first message',
                        createdAt: '2018-12-27T13:48:20.0714341Z',
                        createdBy: 'adamko',
                        updatedAt: null,
                        updatedBy: null,
                        customData: {
                            votes: 0
                        }
                    }
                ]
            });
        const store = mockStore();
        await store.dispatch(selectChannel(channelId));
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CHANNEL_APP_LOADING_STARTED});
        expect(actions[1]).toEqual({type: CHANNEL_APP_SELECT_CHANNEL_SUCCESS,
            payload: {
                id: channelId,
                messages: [
                    {
                        id: 'uuid1',
                        channelId,
                        value: 'this should be first message',
                        createdAt: '2018-12-27T13:48:20.0714341Z',
                        createdBy: 'adamko',
                        updatedAt: null,
                        updatedBy: null,
                        customData: {
                            votes: 0
                        }
                    },
                    {
                        id: 'uuid1',
                        channelId,
                        value: 'this should be second message',
                        createdAt: '2018-12-28T13:48:20.0714341Z',
                        createdBy: 'adamko',
                        updatedAt: null,
                        updatedBy: null,
                        customData: {
                            votes: 0
                        }
                    },
                ]}});
    });
});

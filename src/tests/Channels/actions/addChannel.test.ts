import * as fetchMock from 'fetch-mock';
import {BASE_API_URL} from '../../../api/constants/api';
import {mockStore} from '../../utils/mockStore';
import {addChannel} from '../../../Channels/actions/addChannel';
import * as Immutable from 'immutable';
import {CHANNEL_APP_CHANNEL_CREATE_SUCCESS, CHANNEL_APP_CRUD_FAILURE, CHANNEL_APP_LOADING_STARTED} from '../../../Channels/constants/actionTypes';
import {extendedUrl} from '../../../api/service/ChannelService';

describe('add channel action', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should invoke crud failure when image is missing', async () => {
        fetchMock.mock(BASE_API_URL + 'file', {status: 400});
        const store = mockStore();
        await store.dispatch(addChannel('new channel', {
            members: Immutable.Set(['a', 'b']),
            image: null,
        }));

        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CHANNEL_APP_LOADING_STARTED});
        expect(actions[1]).toEqual({type: CHANNEL_APP_CRUD_FAILURE, payload: {message: 'Please upload channel image'}});
    });

    it('should invoke crud failure when name is empty', async () => {
        fetchMock.mock(BASE_API_URL + 'file', {status: 400});
        const store = mockStore();
        await store.dispatch(addChannel('  ', {
            members: Immutable.Set(['a', 'b']),
            image: null,
        }));

        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CHANNEL_APP_LOADING_STARTED});
        expect(actions[1]).toEqual({type: CHANNEL_APP_CRUD_FAILURE, payload: {message: 'Channel name can\'t be empty'}});
    });

    it('should invoke success when creating was successful', async () => {
        fetchMock.mock(BASE_API_URL + 'file', {status: 200, body: [{id: 1}]});
        fetchMock.mock(BASE_API_URL + 'file/' + 1 + '/download-link', {status: 200, body: {fileUri: 'url/to/file'}});
        fetchMock.mock(BASE_API_URL + extendedUrl, {
            status: 200,
            body: {
                id: 1,
                name: 'new channel',
                customData: {
                    members: ['a', 'b']
                }
            }});
        const store = mockStore();
        await store.dispatch(addChannel('new channel', {
            members: Immutable.Set(['a', 'b']),
            image: new File(['blobpart'], 'name'),
        }));

        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CHANNEL_APP_LOADING_STARTED});
        expect(actions[1]).toEqual({type: CHANNEL_APP_CHANNEL_CREATE_SUCCESS,
            payload: {channel: {customData: {members: Immutable.Set(['a', 'b'])}, id: 1, name: 'new channel'}}});
    });
});

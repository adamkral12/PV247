import {mockStore} from '../../utils/mockStore';
import * as fetchMock from 'fetch-mock';
import {extendedUrl} from '../../../api/service/ChannelService';
import {BASE_API_URL} from '../../../api/constants/api';
import {loadUsers} from '../../../Users/actions/loadUsers';
import {
    USER_APP_GET_USERS_FAILURE,
    USER_APP_GET_USERS_STARTED,
    USER_APP_GET_USERS_SUCCESS
} from '../../../Users/constants/actionTypes';

describe('loading users action', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should dispatch failure - error message when API failed', async () => {
        fetchMock.mock(BASE_API_URL + extendedUrl, 400);
        const store = mockStore();
        await store.dispatch(loadUsers());
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: USER_APP_GET_USERS_STARTED});
        expect(actions[1]).toEqual({type: USER_APP_GET_USERS_FAILURE, payload: {message: 'Bad Request'}});
    });

    it('should dispatch channels on success', async () => {
        fetchMock.mock(
            BASE_API_URL + extendedUrl,
            {
                status: 200,
                body: [
                    {
                        email: 'email@email.com', customData: {
                            displayName: 'new user',
                            profilePicture: ''
                        }
                    },
                ],
            });

        const store = mockStore();
        await store.dispatch(loadUsers());
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: USER_APP_GET_USERS_STARTED});
        expect(actions[1]).toEqual({type: USER_APP_GET_USERS_SUCCESS, payload: {
            users: [
                {
                    email: 'email@email.com', customData: {
                        displayName: 'new user',
                        profilePicture: ''
                    }
                },
            ]}});

    });
});

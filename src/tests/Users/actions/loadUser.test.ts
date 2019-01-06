import * as fetchMock from 'fetch-mock';
import {BASE_API_URL} from '../../../api/constants/api';
import {mockStore} from '../../utils/mockStore';
import * as Immutable from 'immutable';
import {
    USER_APP_GET_USER_FAILURE,
    USER_APP_GET_USER_STARTED,
    USER_APP_GET_USER_SUCCESS
} from '../../../Users/constants/actionTypes';
import {extendedUrl} from '../../../api/service/UserService';
import {IUser} from '../../../Channels/models/IUser';
import {loadUser} from '../../../Users/actions/loadUser';

const user: IUser = {
    email: 'email@email.com',
    customData: {
        displayName: 'Name',
        profilePicture: ''
    }
};

const initialState = {
    userApp: {
        users: {
            byId: Immutable.Map().set(user.email, user)
        },
        user: {
            email: 'email@email.com',
            customData: {
                displayName: 'Name',
                profilePicture: ''
            }
        }
    }
};

describe('load user action', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should dispatch failure when email is wrong', async () => {
        fetchMock.mock(BASE_API_URL + extendedUrl, {status: 400});
        const store = mockStore();
        await store.dispatch(loadUser('bla'));

        const actions = store.getActions();
        expect(actions[0]).toEqual({type: USER_APP_GET_USER_STARTED});
        expect(actions[1]).toEqual({type: USER_APP_GET_USER_FAILURE, payload: {message: 'Bad Request.'}});
    });

    it('should dispatch success when API call is successful', async () => {
        fetchMock.mock(BASE_API_URL + extendedUrl + '/email@email.com', {status: 200, body: user});
        const store = mockStore(initialState);
        await store.dispatch(loadUser('email@email.com'));
        const actions = store.getActions();

        expect(actions[0]).toEqual({type: USER_APP_GET_USER_STARTED});
        expect(actions[1]).toEqual({type: USER_APP_GET_USER_SUCCESS,
            payload: {user }
        });
    });
});

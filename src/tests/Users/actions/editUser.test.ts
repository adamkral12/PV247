import * as fetchMock from 'fetch-mock';
import {BASE_API_URL} from '../../../api/constants/api';
import {mockStore} from '../../utils/mockStore';
import * as Immutable from 'immutable';
import {
    USER_APP_EDIT_USER_SUCCESS,
    USER_APP_EDIT_USER_FAILURE,
    USER_APP_EDIT_USER_STARTED
} from '../../../Users/constants/actionTypes';
import {extendedUrl} from '../../../api/service/UserService';
import {IUser} from '../../../Channels/models/IUser';
import {editUser} from '../../../Users/actions/editUser';

const user: IUser = {
    email: 'email@email.com',
    customData: {
        displayName: 'not yet updated',
        profilePicture: ''
    }
};

const updatedUser: IUser = {
    email: 'email@email.com',
    customData: {
        displayName: 'updated user',
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
                displayName: 'not yet updated',
                profilePicture: ''
            }
        }
    }
};

describe('update user action', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should dispatch failure when display name is empty', async () => {
        const store = mockStore();
        await store.dispatch(editUser(null, '   '));

        const actions = store.getActions();
        expect(actions[0]).toEqual({type: USER_APP_EDIT_USER_FAILURE, payload: {message: 'User name can\'t be empty.'}});
    });

    it('should dispatch success when API call is successful', async () => {
        fetchMock.mock(BASE_API_URL + extendedUrl + '/email@email.com', {status: 200, body: updatedUser});
        const store = mockStore(initialState);
        await store.dispatch(editUser(null, 'updated user'));
        const actions = store.getActions();

        expect(actions[0]).toEqual({type: USER_APP_EDIT_USER_STARTED});
        expect(actions[1]).toEqual({type: USER_APP_EDIT_USER_SUCCESS,
            payload: {user: updatedUser }
        });
    });
});

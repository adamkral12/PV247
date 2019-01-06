import {USER_APP_GET_USER_SUCCESS} from '../../../Users/constants/actionTypes';
import {user} from '../../../Users/reducers/user';

const prevUser = {
    email: 'emailo@freestylo.com',
    customData: {
        displayName: 'freestylo user',
        profilePicture: ''
    }
};

const newUser = {
        email: 'email@email.com',
        customData: {
            displayName: 'Special user',
            profilePicture: ''
        }
    };

describe('user reducer', () => {
    it('successful load should return user', () => {
        expect(user(prevUser, {
            type: USER_APP_GET_USER_SUCCESS,
            payload: {
                newUser
            }
        })).toEqual(newUser);
    });
});

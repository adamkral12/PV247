import * as Immutable from 'immutable';
import {IUser} from '../../../Channels/models/IUser';
import {users} from '../../../Users/reducers/users';
import {
    USER_APP_EDIT_USER_SUCCESS,
    USER_APP_GET_USERS_FAILURE,
    USER_APP_GET_USERS_SUCCESS
} from '../../../Users/constants/actionTypes';

const testUsers: IUser[] = [
    {
        email: 'email@emal.com',
        customData: {
            displayName: 'Special user',
            profilePicture: ''
        }
    },
    {
        email: 'Joey@mail.com',
        customData: {
            displayName: 'Awesome user',
            profilePicture: ''
        }
    }
];

const testMap = Immutable.Map({
    'email@email.com': {
        email: 'email@email.com',
        customData: {
            displayName: 'Special user'
        },
    },
    'Joey@email.com': {
        email: 'Joey@email.com',
        customData: {
            displayName: 'Special user',
            profilePicture: ''
        },
    }
});

describe(
  'user reducer', () => {
      it('should return previous state on random action', () => {
          expect(users(
              {
                  allIds: Immutable.List<string>(),
                  byId: Immutable.Map(),
              },
              {
                  type: 'random',
              },
          )).toEqual({
              byId: Immutable.Map(),
              allIds: Immutable.List()
          });
      });

      it('loading success on empty previous state', () => {
          expect(users(
              {
                  allIds: Immutable.List<string>(),
                  byId: Immutable.Map(),
              },
              {
                  type: USER_APP_GET_USERS_FAILURE,
                  payload: { users: testUsers }
              }
          )).toEqual({
              byId: testMap,
              allIds: Immutable.List<string>(['email@email.com', 'Joey@email.com'])
          });
      });

      it('loading success on non-empty previous state', () => {
          expect(users({
              allIds: Immutable.List(['mail@mail.com']),
              byId: Immutable.Map<string, IUser>({
                  'mail@mail.com': {
                      id: 'mail@mail.com',
                      customData: {
                          displayName: 'this user will not exist',
                          profilePicture: '',
                      }
                  }
              })
          }, {
              type: USER_APP_GET_USERS_SUCCESS,
              payload: {users: testUsers}
          })).toEqual({
              byId: testMap,
              allIds: Immutable.List<string>(['email@email.com', 'Joey@email.com'])
          });
      });


      it('user edit success', () => {
          expect(users({
              allIds: Immutable.List(['email@email.com']),
              byId: Immutable.Map({
                  'email@email.com': testUsers[0]
              })
          },
              {
                  type: USER_APP_EDIT_USER_SUCCESS,
                  payload: {
                      channel: {
                          email: 'email@email.com',
                          customData: {
                              displayName: 'new name',
                              profilePicture: null,
                          }
                      }
                  }
              }
          )).toEqual({
              allIds: Immutable.List(['email@email.com']),
              byId: Immutable.Map({
                  'email@email.com': {... testUsers[0], name: 'new name' }
              })
          });
      });
    }
);

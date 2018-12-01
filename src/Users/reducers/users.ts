import * as Immutable from 'immutable';
import {USER_APP_EDIT_USER, USER_APP_GET_USERS_SUCCESS} from '../constants/actionTypes';
import {combineReducers} from 'redux';
import {IUsers} from '../model/IUserApp';
import {IUser} from '../../Channels/models/IUser';

const allIds = (prevState: Immutable.List<string> = Immutable.List(), action: Action): Immutable.List<string> => {
    switch (action.type) {
        case USER_APP_GET_USERS_SUCCESS:
            return Immutable.List(action.payload.users.map((user: IUser) => user.email));

        default:
            return prevState;
    }
};

const byId = (prevState = Immutable.Map<string, IUser>(), action: Action): Immutable.Map<string, IUser> => {
    switch (action.type) {
        case USER_APP_GET_USERS_SUCCESS:
            return Immutable.Map(action.payload.users.map((user: IUser) => [user.email, user]));
        case USER_APP_EDIT_USER: {
            const {email, profilePicture, displayName} = action.payload;
            const user: IUser = {
                email,
                customData: {
                    profilePicture,
                    displayName
                }
            };

            return prevState.set(action.payload.email, { ...user });
        }

        default:
            return prevState;
    }
};

export const users = combineReducers<IUsers>({
    allIds,
    byId,
});

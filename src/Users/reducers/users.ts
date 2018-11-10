import * as Immutable from 'immutable';
import {USER_APP_EDIT_USER} from '../constants/actionTypes';
import {combineReducers} from 'redux';
import {IUsers} from '../model/IUserApp';
import {IUser} from '../../Channels/models/IUser';

const allIds = (prevState: Immutable.List<string> = Immutable.List(), action: Action): Immutable.List<string> => {
    switch (action.type) {
        default:
            return prevState;
    }
};

const byId = (prevState = Immutable.Map<string, IUser>(), action: Action): Immutable.Map<string, IUser> => {
    switch (action.type) {

        case USER_APP_EDIT_USER: {
            const user: IUser = {email: action.payload.email, customData: {profilePicture: action.payload.profilePicture,
                        displayName: action.payload.displayName }};

            return prevState.set(action.payload.id, { ...user });
        }

        default:
            return prevState;
    }
};

export const users = combineReducers<IUsers>({
    allIds,
    byId,
});

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

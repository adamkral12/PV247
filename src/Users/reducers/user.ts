import {IUser} from '../../Channels/models/IUser';
import {USER_APP_GET_USER_SUCCESS} from '../constants/actionTypes';

export const user = (prevState: IUser, action: Action): IUser => {
    switch (action.type) {
        case USER_APP_GET_USER_SUCCESS:
            console.log(action.type);
            console.log(action.payload.user);
            return action.payload.user;
        default:
            return prevState;
    }
};

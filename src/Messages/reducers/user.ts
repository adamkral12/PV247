import {IUser} from '../../Channels/models/IUser';

export const user = (prevState: IUser, action: Action): IUser => {
    switch (action.type) {
        default:
            return prevState;
    }
};

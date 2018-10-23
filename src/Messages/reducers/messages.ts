import {IMessage} from '../model/IMessage';
import * as Immutable from 'immutable';

export const messages = (prevState = Immutable.List<IMessage>(), action: Action): Immutable.List<IMessage> => {
    switch (action.type) {
        default:
            return prevState;
    }
};

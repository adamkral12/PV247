import {IMessage} from '../model/IMessage';
import * as Immutable from 'immutable';
import {MESSAGE_APP_DOWNVOTE_MESSAGE, MESSAGE_APP_UPVOTE_MESSAGE, MESSAGE_APP_DELETE_MESSAGE, MESSAGE_APP_CREATE_MESSAGE, MESSAGE_APP_EDIT_MESSAGE} from '../constants/actionTypes';
import {IMessages} from '../model/IMessageApp';
import {combineReducers} from 'redux';

const byId = (prevState = Immutable.Map<Uuid, IMessage>(), action: Action): Immutable.Map<Uuid, IMessage> => {
    switch (action.type) {
        case MESSAGE_APP_CREATE_MESSAGE: {
            return prevState.set(action.payload.message.id, action.payload.message);
        }

        case MESSAGE_APP_UPVOTE_MESSAGE: {
            const { id } = action.payload;
            const oldMessage = prevState.get(id);

            return prevState.set(id, { ...oldMessage, customData: { ...oldMessage.customData, votes: oldMessage.customData.votes + 1 }});
        }

        case MESSAGE_APP_DOWNVOTE_MESSAGE: {
            const {id} = action.payload;
            const oldMessage = prevState.get(id);

            return prevState.set(id, {...oldMessage, customData: { ...oldMessage.customData, votes: oldMessage.customData.votes - 1}});
        }

        case MESSAGE_APP_DELETE_MESSAGE: {
            const { id } = action.payload;
            return prevState.remove(id);
        }

        case MESSAGE_APP_EDIT_MESSAGE: {
            const { id, value } = action.payload;
            const oldMessage = prevState.get(id);
            return prevState.set(id, {...oldMessage, value});
        }

        default:
            return prevState;
    }
};

const allIds = (prevState = Immutable.List<Uuid>(), action: Action): Immutable.List<Uuid> => {
    switch (action.type) {
        case MESSAGE_APP_CREATE_MESSAGE: {
            return prevState.push(action.payload.message.id);
        }

        case MESSAGE_APP_DELETE_MESSAGE:
            const index = prevState.indexOf(action.payload.id);
            return prevState.delete(index);
        default:
            return prevState;
    }
};

export const messages = combineReducers<IMessages>({
    allIds,
    byId,
});

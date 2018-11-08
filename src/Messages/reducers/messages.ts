import {IMessage} from '../model/IMessage';
import * as Immutable from 'immutable';
import {MESSAGE_APP_DOWNVOTE_MESSAGE, MESSAGE_APP_UPVOTE_MESSAGE, MESSAGE_APP_DELETE_MESSAGE} from '../constants/actionTypes';
import {IMessages} from '../model/IMessageApp';
import {combineReducers} from 'redux';

const byId = (prevState = Immutable.Map<Uuid, IMessage>(), action: Action): Immutable.Map<Uuid, IMessage> => {
    switch (action.type) {
        case MESSAGE_APP_UPVOTE_MESSAGE: {
            const { id } = action.payload;
            const oldTodo = prevState.get(id);

            return prevState.set(id, { ...oldTodo, customData: { votes: oldTodo.customData.votes + 1 }});
        }

        case MESSAGE_APP_DOWNVOTE_MESSAGE: {
            const {id} = action.payload;
            const oldTodo = prevState.get(id);

            return prevState.set(id, {...oldTodo, customData: {votes: oldTodo.customData.votes - 1}});
        }

        case MESSAGE_APP_DELETE_MESSAGE: {
            const { id } = action.payload;
            return prevState.remove(id);
        }


        default:
            return prevState;
    }
};

const allIds = (prevState = Immutable.List<Uuid>(), action: Action): Immutable.List<Uuid> => {
    switch (action.type) {
        case MESSAGE_APP_DELETE_MESSAGE:
            const index = prevState.indexOf(action.payload.id);
            const newList = prevState.delete(index);
            return newList;

        default:
            return prevState;
    }
};

export const messages = combineReducers<IMessages>({
    allIds,
    byId,
});

import {IMessage} from '../model/IMessage';
import * as Immutable from 'immutable';
import {IMessages} from '../model/IMessageApp';
import {combineReducers} from 'redux';
import {MESSAGE_APP_CREATE_MESSAGE_SUCCESS, MESSAGE_APP_DELETE_MESSAGE_SUCCESS, MESSAGE_APP_DOWNVOTE_MESSAGE_SUCCESS, MESSAGE_APP_UPDATE_MESSAGE_SUCCESS, MESSAGE_APP_UPVOTE_MESSAGE_SUCCESS} from '../constants/actionTypes';
import {CHANNEL_APP_SELECT_CHANNEL_SUCCESS} from '../../Channels/constants/actionTypes';

const byId = (prevState = Immutable.Map<Uuid, IMessage>(), action: Action): Immutable.Map<Uuid, IMessage> => {
    switch (action.type) {
        case MESSAGE_APP_CREATE_MESSAGE_SUCCESS:
        case MESSAGE_APP_UPVOTE_MESSAGE_SUCCESS:
        case MESSAGE_APP_DOWNVOTE_MESSAGE_SUCCESS:
        case MESSAGE_APP_UPDATE_MESSAGE_SUCCESS: {
            return prevState.set(action.payload.message.id, action.payload.message);
        }
        case MESSAGE_APP_DELETE_MESSAGE_SUCCESS: {
            return prevState.remove(action.payload.messageId);
        }
        case CHANNEL_APP_SELECT_CHANNEL_SUCCESS:
            return Immutable.Map(action.payload.messages.map((item: IMessage) => [item.id, item]));
        default:
            return prevState;
    }
};

const allIds = (prevState = Immutable.List<Uuid>(), action: Action): Immutable.List<Uuid> => {
    switch (action.type) {
        case MESSAGE_APP_CREATE_MESSAGE_SUCCESS: {
            return prevState.push(action.payload.message.id);
        }

        case MESSAGE_APP_DELETE_MESSAGE_SUCCESS:
            const index = prevState.indexOf(action.payload.messageId);
            return prevState.delete(index);

        case CHANNEL_APP_SELECT_CHANNEL_SUCCESS:
            return Immutable.List<Uuid>(action.payload.messages.map((item: IMessage) => item.id));
        default:
            return prevState;
    }
};

export const messages = combineReducers<IMessages>({
    allIds,
    byId,
});

import {
    MESSAGE_APP_CREATE_MESSAGE,
    MESSAGE_APP_DELETE_MESSAGE,
    MESSAGE_APP_UPVOTE_MESSAGE,
    MESSAGE_APP_DOWNVOTE_MESSAGE,
    MESSAGE_APP_EDIT_MESSAGE,
    MESSAGE_APP_START_EDITING_MESSAGE,
    MESSAGE_APP_CANCEL_EDITING_MESSAGE
} from '../constants/actionTypes';
import {IMessage} from '../model/IMessage';
import {Dispatch} from 'redux';
import * as uuid from 'uuid';

export const createMessage = (message: IMessage): Action => ({
    type: MESSAGE_APP_CREATE_MESSAGE,
    payload: {
        message
    }
});

export const createMessageStarted = (channelId: Uuid, message: string): any =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch(createMessage({
            id: uuid(),
            channelId,
            value: message,
            // TODO: redo
            createdBy: 'lolo',
            createdAt: Date.now().toString(),
            updatedBy: null,
            updatedAt: null,
            customData: {votes: 0}
        }));
    };



export const deleteMessage = (id: Uuid): Action => ({
    type: MESSAGE_APP_DELETE_MESSAGE,
    payload: {
        id
    }
});

export const upvoteMessage = (id: Uuid): Action => ({
    type: MESSAGE_APP_UPVOTE_MESSAGE,
    payload: {
        id
    }
});

export const downvoteMessage = (id: Uuid): Action => ({
    type: MESSAGE_APP_DOWNVOTE_MESSAGE,
    payload: {
        id
    }
});

export const editMessage = (value: string, id: Uuid): Action => ({
    type: MESSAGE_APP_EDIT_MESSAGE,
    payload: {
        id,
        value,
    }
});

export const startEditingMessage = (id: Uuid): Action => ({
    type: MESSAGE_APP_START_EDITING_MESSAGE,
    payload: {
        id,
    }
});

export const cancelEditingMessage = (id: Uuid): Action => ({
    type: MESSAGE_APP_CANCEL_EDITING_MESSAGE,
    payload: {
        id,
    }
});

import {MESSAGE_APP_CREATE_MESSAGE, MESSAGE_APP_DELETE_MESSAGE, MESSAGE_APP_UPVOTE_MESSAGE, MESSAGE_APP_DOWNVOTE_MESSAGE} from '../constants/actionTypes';
import {IMessage} from '../model/IMessage';
import {Dispatch} from 'redux';
import {IState} from '../../common/IState';
import * as uuid from 'uuid';

export const createMessage = (message: IMessage): Action => ({
    type: MESSAGE_APP_CREATE_MESSAGE,
    payload: {
        message
    }
});

export const createMessageStarted = (channelId: Uuid, message: string): any =>
    async (dispatch: Dispatch, getState: () => IState): Promise<void> => {
        const createdBy = getState().userApp.user.email;
        dispatch(createMessage({
            id: uuid(),
            channelId,
            value: message,
            createdBy,
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

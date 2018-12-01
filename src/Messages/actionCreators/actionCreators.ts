import {
    MESSAGE_APP_LOADING_STARTED, MESSAGE_APP_CANCEL_EDITING_MESSAGE, MESSAGE_APP_START_EDITING_MESSAGE, MESSAGE_APP_DELETE_MESSAGE_SUCCESS, MESSAGE_APP_CREATE_MESSAGE_SUCCESS
} from '../constants/actionTypes';
import {IMessage} from '../model/IMessage';
import {Dispatch} from 'redux';

import {IState} from '../../common/IState';
import {MessageService} from '../../api/service/MessageService';
import {MESSAGE_APP_UPVOTE_MESSAGE_SUCCESS} from '../constants/actionTypes';
import {MESSAGE_APP_DOWNVOTE_MESSAGE_SUCCESS} from '../constants/actionTypes';
import {MESSAGE_APP_UPDATE_MESSAGE_SUCCESS} from '../constants/actionTypes';


const loadingStarted = (): Action => ({
    type: MESSAGE_APP_LOADING_STARTED,
});

const createMessageSuccess = (message: IMessage): Action => ({
    type: MESSAGE_APP_CREATE_MESSAGE_SUCCESS,
    payload: {
        message,
    }
});

export const createMessage = (text: string): any =>
    async (dispatch: Dispatch, getState: () => IState): Promise<void> => {
        const userId = getState().userApp.user.email;
        const channelId = getState().channelList.selectedChannelId;
        dispatch(loadingStarted());
        const message = await MessageService.createEntity({
            id: '',
            channelId,
            value: text,
            createdBy: userId,
            createdAt: Date.now().toString(),
            updatedBy: null,
            updatedAt: null,
            customData: {votes: 0}
        });

        const newMessage = {
            ...message,
            channelId
        };

        dispatch(createMessageSuccess(newMessage));
    };


const deleteMessageSuccess = (messageId: string): Action => ({
    type: MESSAGE_APP_DELETE_MESSAGE_SUCCESS,
    payload: {
        messageId,
    }
});

export const deleteMessage = (id: string | null): any =>
    async (dispatch: Dispatch, getState: () => IState): Promise<void> => {
        if (id) {
            const channelId = getState().channelList.selectedChannelId;
            dispatch(loadingStarted());
            await MessageService.deleteEntity(id, channelId);
            dispatch(deleteMessageSuccess(id));
        }
    };

const upvoteMessageSuccess = (message: IMessage): Action => ({
    type: MESSAGE_APP_UPVOTE_MESSAGE_SUCCESS,
    payload: {
        message,
    }
});

export const upvoteMessage = (id: string): any =>
    async (dispatch: Dispatch, getState: () => IState): Promise<void> => {
        dispatch(loadingStarted());
        const currentMessage = getState().messageApp.messages.byId.get(id);
        const channelId = getState().channelList.selectedChannelId;
        const messageToEdit: IMessage = {
            ...currentMessage,
            customData: {
                ...currentMessage.customData,
                votes: currentMessage.customData.votes + 1
            }
        };
        const message = await MessageService.editEntity(messageToEdit, channelId);
        const updatedMessage = {
            ...message,
            channelId
        };
        dispatch(upvoteMessageSuccess(updatedMessage));
    };

const downvoteMessageSuccess = (message: IMessage): Action => ({
    type: MESSAGE_APP_DOWNVOTE_MESSAGE_SUCCESS,
    payload: {
        message,
    }
});

export const downvoteMessage = (id: string): any =>
    async (dispatch: Dispatch, getState: () => IState): Promise<void> => {
        dispatch(loadingStarted());
        const currentMessage = getState().messageApp.messages.byId.get(id);
        const channelId = getState().channelList.selectedChannelId;
        const messageToEdit: IMessage = {
            ...currentMessage,
            customData: {
                ...currentMessage.customData,
                votes: currentMessage.customData.votes - 1
            }
        };
        const message = await MessageService.editEntity(messageToEdit, channelId);
        const updatedMessage = {
            ...message,
            channelId
        };
        dispatch(downvoteMessageSuccess(updatedMessage));
    };

const updateMessageSuccess = (message: IMessage): Action => ({
    type: MESSAGE_APP_UPDATE_MESSAGE_SUCCESS,
    payload: {
        message,
    }
});

export const updateMessage = (id: string, text: string): any =>
    async (dispatch: Dispatch, getState: () => IState): Promise<void> => {
        dispatch(loadingStarted());
        const currentMessage = getState().messageApp.messages.byId.get(id);
        const channelId = getState().channelList.selectedChannelId;
        const messageToEdit: IMessage = {
            ...currentMessage,
            value: text
        };
        const message = await MessageService.editEntity(messageToEdit, channelId);
        // rename?
        const updatedMessage = {
            ...message,
            channelId
        };
        dispatch(updateMessageSuccess(updatedMessage));
    };

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



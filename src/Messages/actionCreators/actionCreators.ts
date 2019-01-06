import {
    MESSAGE_APP_CANCEL_EDITING_MESSAGE,
    MESSAGE_APP_START_EDITING_MESSAGE,
    MESSAGE_APP_DELETE_MESSAGE_SUCCESS,
    MESSAGE_APP_CREATE_MESSAGE_SUCCESS, MESSAGE_APP_CRUD_FAILURE, MESSAGE_APP_LOADING_STARTED
} from '../constants/actionTypes';
import {IMessage} from '../model/IMessage';
import {Dispatch} from 'redux';

import {IState} from '../../common/IState';
import {MessageService} from '../../api/service/MessageService';
import {MESSAGE_APP_UPVOTE_MESSAGE_SUCCESS} from '../constants/actionTypes';
import {MESSAGE_APP_DOWNVOTE_MESSAGE_SUCCESS} from '../constants/actionTypes';
import {MESSAGE_APP_UPDATE_MESSAGE_SUCCESS} from '../constants/actionTypes';
import {RawDraftContentState} from 'react-draft-wysiwyg';


const loadingStarted = (): Action => ({
    type: MESSAGE_APP_LOADING_STARTED,
});

export const crudFailure = (message: string): Action => ({
    type: MESSAGE_APP_CRUD_FAILURE,
    payload: {
        message,
    }
});
const createMessageSuccess = (message: IMessage): Action => ({
    type: MESSAGE_APP_CREATE_MESSAGE_SUCCESS,
    payload: {
        message,
    }
});

export const createMessage = (messageContent: RawDraftContentState): any =>
    async (dispatch: Dispatch, getState: () => IState): Promise<void> => {
        // message contains some text or pictures
        if (!(messageContent.blocks.some(block => /\S/.test(block.text) || block.type === 'atomic'))) {
            dispatch(crudFailure('Message can not be empty.'));
        }
        else {
            const channelId = getState().channelList.selectedChannelId;
            dispatch(loadingStarted());

            try {
                const message = await MessageService.createEntity({
                    id: '',
                    channelId,
                    value: JSON.stringify(messageContent),
                    createdBy: '',
                    createdAt: '',
                    updatedBy: null,
                    updatedAt: null,
                    customData: {votes: 0}
                });

                const newMessage = {
                    ...message,
                    channelId
                };

                dispatch(createMessageSuccess(newMessage));
            } catch (e) {
                dispatch(crudFailure('Message could not be created.'));
            }
        }
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
            try {
                await MessageService.deleteEntity(id, channelId);
                dispatch(deleteMessageSuccess(id));
            } catch (e) {
                dispatch(crudFailure('Message could not be deleted.'));
            }
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
        try {

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
        }
        catch (e) {
            dispatch(crudFailure('Message could not be upvoted.'));
        }
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
        try {
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
        }
        catch (e) {
            dispatch(crudFailure('Message could not be downvoted.'));
        }
    };

const updateMessageSuccess = (message: IMessage): Action => ({
    type: MESSAGE_APP_UPDATE_MESSAGE_SUCCESS,
    payload: {
        message,
    }
});

export const updateMessage = (id: string, messageContent: RawDraftContentState): any =>
    async (dispatch: Dispatch, getState: () => IState): Promise<void> => {
        // message contains some text or pictures
        if (!(messageContent.blocks.some(block => /\S/.test(block.text) || block.type === 'atomic'))) {
            dispatch(crudFailure('Message can not be empty.'));
        }
        else {
            dispatch(loadingStarted());
            try {
                const currentMessage = getState().messageApp.messages.byId.get(id);
                const channelId = getState().channelList.selectedChannelId;
                const messageToEdit: IMessage = {
                    ...currentMessage,
                    value: JSON.stringify(messageContent)
                };
                const message = await MessageService.editEntity(messageToEdit, channelId);
                const updatedMessage = {
                    ...message,
                    channelId
                };
                dispatch(updateMessageSuccess(updatedMessage));
            }
            catch (e) {
                dispatch(crudFailure('Message could not be updated.'));
            }
        }
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



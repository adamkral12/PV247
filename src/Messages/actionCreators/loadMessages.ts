import { Dispatch } from 'redux';
import {
    MESSAGE_APP_LOADING_FAILURE,
    MESSAGE_APP_LOADING_STARTED,
    MESSAGE_APP_LOADING_SUCCESS,
} from '../constants/actionTypes';

import {MessageService} from '../../api/service/MessageService';
import {IMessage} from '../model/IMessage';
import {IState} from '../../common/IState';

export const loadingStarted = (): Action => ({
    type: MESSAGE_APP_LOADING_STARTED,
});

const loadingSuccess = (messages: ReadonlyArray<IMessage>): Action => ({
    type: MESSAGE_APP_LOADING_SUCCESS,
    payload: {
        messages,
    }
});

export const loadingFailure = (message: string): Action => ({
    type: MESSAGE_APP_LOADING_FAILURE,
    payload: {
        message,
    }
});

export const loadMessages = (): any =>
    async (dispatch: Dispatch, getState: () => IState): Promise<void> => {
        dispatch(loadingStarted());
        try {
            const messages = await MessageService.getAllEntities(getState().channelList.selectedChannelId);
            dispatch(loadingSuccess(messages));
        } catch (e) {
            dispatch(loadingFailure(e.message));
        }
    };

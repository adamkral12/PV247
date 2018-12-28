import {CHANNEL_APP_SELECT_CHANNEL_FAILURE, CHANNEL_APP_SELECT_CHANNEL_SUCCESS} from '../constants/actionTypes';
import {IMessage} from '../../Messages/model/IMessage';
import {Dispatch} from 'redux';
import {loadingStarted} from './loadChannels';
import {MessageService} from '../../api/service/MessageService';

const selectChannelFailure = (id: string): Action => ({
    type: CHANNEL_APP_SELECT_CHANNEL_FAILURE,
    payload: {
        id,
    }
});

const selectChannelSuccess = (id: string, messages: ReadonlyArray<IMessage>): Action => ({
    type: CHANNEL_APP_SELECT_CHANNEL_SUCCESS,
    payload: {
        id,
        messages
    }
});

export const selectChannel = (id: string): any =>
    async (dispatch: Dispatch): Promise<void> => {
        if (id) {
            dispatch(loadingStarted());
            try {
                let messages = await MessageService.getAllEntities(id);
                messages = messages.sort((m1, m2) => {
                    if (m1.createdAt > m2.createdAt) {
                        return 1;
                    }

                    if (m1.createdAt < m2.createdAt) {
                        return -1;
                    }

                    return 0;
                });
                dispatch(selectChannelSuccess(id, messages));
            } catch (e) {
                dispatch(selectChannelFailure('An error occurred.'));
            }
        }
    };

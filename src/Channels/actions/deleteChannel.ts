import {CHANNEL_APP_CHANNEL_REMOVE_SUCCESS} from '../constants/actionTypes';
import {Dispatch} from 'redux';
import {loadingStarted} from './loadChannels';
import {ChannelService} from '../../api/service/ChannelService';
import {crudFailure} from './utils';

const deleteChannelSuccess = (channelId: string): Action => ({
    type: CHANNEL_APP_CHANNEL_REMOVE_SUCCESS,
    payload: {
        channelId,
    }
});

export const deleteChannel = (id: string | null): any =>
    async (dispatch: Dispatch): Promise<void> => {
        if (id) {
            dispatch(loadingStarted());
            try {
                await ChannelService.deleteEntity(id);
                dispatch(deleteChannelSuccess(id));
            } catch (e) {
                dispatch(crudFailure('An error occurred while deleting the channel.'));
            }
        }
    };

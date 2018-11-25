import { Dispatch } from 'redux';
import {
    CHANNEL_APP_LOADING_STARTED,
    CHANNEL_APP_LOADING_SUCCESS,
} from '../constants/actionTypes';
import {IChannel} from '../models/IChannel';
import {ChannelService} from '../../api/service/ChannelService';

const loadingStarted = (): Action => ({
    type: CHANNEL_APP_LOADING_STARTED,
});

const loadingSuccess = (channels: ReadonlyArray<IChannel>): Action => ({
    type: CHANNEL_APP_LOADING_SUCCESS,
    payload: {
        channels,
    }
});

export const loadChannels = (): any =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch(loadingStarted());
        const channels = await new ChannelService().getAllEntities();
        dispatch(loadingSuccess(channels));
    };

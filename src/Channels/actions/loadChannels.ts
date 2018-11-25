import { Dispatch } from 'redux';
import {
    CHANNEL_APP_LIST_LOADING_FAILURE,
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

const loadingFailure = (message: string): Action => ({
    type: CHANNEL_APP_LIST_LOADING_FAILURE,
    payload: {
        message,
    }
});

export const loadChannels = (): any =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch(loadingStarted());
        try {
            const channels = await new ChannelService().getAllEntities();
            dispatch(loadingSuccess(channels));
        } catch (e) {
            dispatch(loadingFailure(e.message))
        }
    };

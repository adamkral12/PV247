import { Dispatch } from 'redux';
import {
    CHANNEL_APP_LOADING_SUCCESS,
} from '../constants/actionTypes';
import {IChannel} from '../models/IChannel';
import {CHANNELS_DATA} from '../../utils/exportData';


const getChannels = (channels: ReadonlyArray<IChannel>): Action => ({
    type: CHANNEL_APP_LOADING_SUCCESS,
    payload: {
        channels,
    }
});

export const loadChannels = (): any =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch(getChannels(CHANNELS_DATA));
    };

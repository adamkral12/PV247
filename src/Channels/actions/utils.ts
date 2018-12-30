import {
    CHANNEL_APP_CRUD_FAILURE,
} from '../constants/actionTypes';
import {IChannel} from '../models/IChannel';
import * as Immutable from 'immutable';

export const convertChannelMembersToSet = (channel: IChannel): IChannel => ({
    ...channel,
    customData: {
        ...channel.customData,
        members: Immutable.Set(channel.customData.members)
    }
});

export const crudFailure = (message: string): Action => ({
    type: CHANNEL_APP_CRUD_FAILURE,
    payload: {
        message,
    }
});


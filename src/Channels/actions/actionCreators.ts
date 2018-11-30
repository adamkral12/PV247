import {
    CHANNEL_LIST_CHANNEL_UPDATE_SUCCESS,
    CHANNEL_LIST_CHANNEL_REMOVE_SUCCESS,
    CHANNEL_APP_SHOW_EDIT_CHANNEL,
    CHANNEL_APP_HIDE_EDIT_CHANNEL,
    CHANNEL_APP_SHOW_CREATE_CHANNEL,
    CHANNEL_APP_SELECT_CHANNEL, CHANNEL_LIST_CHANNEL_CREATE, CHANNEL_APP_SET_VISIBILITY_FILTER, CHANNEL_LIST_SHOW_LIST, CHANNEL_LIST_HIDE_LIST, CHANNEL_APP_LOADING_STARTED,
} from '../constants/actionTypes';
import {IEditedChannelCustomData} from '../models/IEditedChannelCustomData';
import {IChannel} from '../models/IChannel';
import {Dispatch} from 'redux';
import {ChannelService} from '../../api/service/ChannelService';
import {IChannelCustomData} from '../models/IChannelCustomData';
import {IState} from '../../common/IState';
import * as Immutable from 'immutable';

const loadingStarted = (): Action => ({
    type: CHANNEL_APP_LOADING_STARTED,
});

export const showCreateChannel = (): Action => ({
  type: CHANNEL_APP_SHOW_CREATE_CHANNEL,
  payload: {},
});

const updateChannelSuccess = (channel: IChannel): Action => ({
    type: CHANNEL_LIST_CHANNEL_UPDATE_SUCCESS,
    payload: {
        channel,
    }
});

export const updateChannel = (id: string, name: string, customData: IEditedChannelCustomData): any =>
    async (dispatch: Dispatch, getState: () => IState): Promise<void> => {
    dispatch(loadingStarted());
    const currentChannel = getState().channelList.channels.byId.get(id);
    const channelToEdit: IChannel = {
            id,
            name,
            customData: {
                ...currentChannel.customData,
                members: Immutable.Set(currentChannel.customData.members).merge(customData.invitedUsers)
            }
        };
    const channel = await ChannelService.editEntity(channelToEdit);
    dispatch(updateChannelSuccess(channel));
    };


const addChannelSuccess = (channel: IChannel): Action => ({
    type: CHANNEL_LIST_CHANNEL_CREATE,
    payload: {
        channel,
    }
});

export const addChannel = (name: string, customData: IChannelCustomData): any =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch(loadingStarted());
        const channel = await ChannelService.createEntity({
            name,
            customData,
            id: '',
        });
        dispatch(addChannelSuccess(channel));
    };

const deleteChannelSuccess = (channelId: string): Action => ({
    type: CHANNEL_LIST_CHANNEL_REMOVE_SUCCESS,
    payload: {
        channelId,
    }
});

export const deleteChannel = (id: string | null): any =>
    async (dispatch: Dispatch): Promise<void> => {
        if (id) {
            dispatch(loadingStarted());
            await ChannelService.deleteEntity(id);
            dispatch(deleteChannelSuccess(id));
        }
    };

export const hideEditChannel = (): Action => ({
    type: CHANNEL_APP_HIDE_EDIT_CHANNEL,
});

export const showEditChannel = (id: string): Action => ({
    type: CHANNEL_APP_SHOW_EDIT_CHANNEL,
    payload: {
      id,
    }
});

export const selectChannel = (id: string): Action => ({
    type: CHANNEL_APP_SELECT_CHANNEL,
    payload: {
        id,
    }
});

export const setVisibilityFilter = (text: string): Action => ({
    type: CHANNEL_APP_SET_VISIBILITY_FILTER,
    payload: {
        text,
    }
});


export const showChannelList = (): Action => ({
    type: CHANNEL_LIST_SHOW_LIST,
});

export const hideChannelList = (): Action => ({
    type: CHANNEL_LIST_HIDE_LIST,
});

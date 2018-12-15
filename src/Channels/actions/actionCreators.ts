import {
    CHANNEL_APP_CHANNEL_UPDATE_SUCCESS,
    CHANNEL_APP_SHOW_EDIT_CHANNEL,
    CHANNEL_APP_HIDE_EDIT_CHANNEL,
    CHANNEL_APP_SHOW_CREATE_CHANNEL,
    CHANNEL_APP_SET_VISIBILITY_FILTER,
    CHANNEL_LIST_SHOW_LIST,
    CHANNEL_LIST_HIDE_LIST,
    CHANNEL_APP_CHANNEL_REMOVE_SUCCESS,
    CHANNEL_APP_CHANNEL_CREATE_SUCCESS,
    CHANNEL_APP_CRUD_FAILURE,
    CHANNEL_APP_SELECT_CHANNEL_FAILURE,
    CHANNEL_APP_SELECT_CHANNEL_SUCCESS,
} from '../constants/actionTypes';
import {IEditedChannelCustomData} from '../models/IEditedChannelCustomData';
import {IChannel} from '../models/IChannel';
import {Dispatch} from 'redux';
import {ChannelService} from '../../api/service/ChannelService';
import {IChannelCustomData} from '../models/IChannelCustomData';
import {IState} from '../../common/IState';
import * as Immutable from 'immutable';
import {loadingStarted} from './loadChannels';
import {MessageService} from '../../api/service/MessageService';
import {IMessage} from '../../Messages/model/IMessage';
import {Pv247Service} from '../../api/service/Pv247Service';

const convertChannelMembersToSet = (channel: IChannel): IChannel => ({
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

export const showCreateChannel = (): Action => ({
  type: CHANNEL_APP_SHOW_CREATE_CHANNEL,
  payload: {},
});

const updateChannelSuccess = (channel: IChannel): Action => ({
    type: CHANNEL_APP_CHANNEL_UPDATE_SUCCESS,
    payload: {
        channel,
    }
});

export const updateChannel = (id: string, name: string, customData: IEditedChannelCustomData): any =>
    async (dispatch: Dispatch, getState: () => IState): Promise<void> => {
        if (!/\S/.test(name)) {
            // string is empty or just whitespace
            dispatch(crudFailure('Channel name can\'t be empty'));
        }
        else {
            try {
                dispatch(loadingStarted());
                const currentChannel = getState().channelList.channels.byId.get(id);
                let channelWithFile;
                let file;
                if (customData.image) {
                    file = await Pv247Service.uploadFile(customData.image);
                    if (file) {
                        const getFile = await Pv247Service.getFile(file[0].id);
                        channelWithFile = {
                            ...currentChannel,
                            customData: {
                                ...currentChannel.customData, image: getFile.fileUri,
                            }
                        };
                    }
                }

                const channelToEdit: IChannel = {
                    ...(channelWithFile ? channelWithFile : currentChannel),
                    name,
                    customData: {
                        ...(channelWithFile ? channelWithFile : currentChannel).customData,
                        members: Immutable.Set((channelWithFile ? channelWithFile : currentChannel).customData.members).merge(customData.invitedUsers)
                    }
                };

                const channel = await ChannelService.editEntity(channelToEdit);
                dispatch(updateChannelSuccess(convertChannelMembersToSet(channel)));
            } catch (e) {
                dispatch(crudFailure('An error occurred while editing the channel.'));
            }
        }
    };


const addChannelSuccess = (channel: IChannel): Action => ({
    type: CHANNEL_APP_CHANNEL_CREATE_SUCCESS,
    payload: {
        channel,
    }
});

export const addChannel = (name: string, customData: IChannelCustomData): any =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch(loadingStarted());
        try {
            if (!/\S/.test(name)) {
                // string is empty or just whitespace
                dispatch(crudFailure('Channel name can\'t be empty'));
            }
            else if (typeof customData.image === 'string') {
                dispatch(crudFailure('Please upload channel image'));
            }
            else {
                const file = await Pv247Service.uploadFile(customData.image);
                if (file) {
                    const getFile = await Pv247Service.getFile(file[0].id);
                    const dataWithFile: IChannelCustomData = {
                        ...customData, image: getFile.fileUri,
                    };
                    const channel = await ChannelService.createEntity({
                        name,
                        customData: dataWithFile,
                        id: '',
                    });
                    dispatch(addChannelSuccess(convertChannelMembersToSet(channel)));
                }
            }
        } catch (e) {
            dispatch(crudFailure('Error while creating channel'));
        }
    };

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

export const hideEditChannel = (): Action => ({
    type: CHANNEL_APP_HIDE_EDIT_CHANNEL,
});

export const showEditChannel = (id: string): Action => ({
    type: CHANNEL_APP_SHOW_EDIT_CHANNEL,
    payload: {
      id,
    }
});


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


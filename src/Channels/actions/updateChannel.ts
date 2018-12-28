import {IChannel} from '../models/IChannel';
import {CHANNEL_APP_CHANNEL_UPDATE_SUCCESS} from '../constants/actionTypes';
import {IEditedChannelCustomData} from '../models/IEditedChannelCustomData';
import {Dispatch} from 'redux';
import {IState} from '../../common/IState';
import {loadingStarted} from './loadChannels';
import {Pv247Service} from '../../api/service/Pv247Service';
import * as Immutable from 'immutable';
import {ChannelService} from '../../api/service/ChannelService';
import {convertChannelMembersToSet, crudFailure} from './utils';

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

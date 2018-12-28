import {IChannel} from '../models/IChannel';
import {CHANNEL_APP_CHANNEL_CREATE_SUCCESS} from '../constants/actionTypes';
import {IChannelCustomData} from '../models/IChannelCustomData';
import {Dispatch} from 'redux';
import {loadingStarted} from './loadChannels';
import {Pv247Service} from '../../api/service/Pv247Service';
import {ChannelService} from '../../api/service/ChannelService';
import {convertChannelMembersToSet, crudFailure} from './utils';

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
            if (!customData) {
                dispatch(crudFailure('Please upload channel image'));
            }
            else {
                const file = await Pv247Service.uploadFile(customData.image as File);
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

import {Pv247Service} from './Pv247Service';
import {APP_ID} from '../constants/api';
import {IChannel} from '../../Channels/models/IChannel';
import {IApiService} from '../model/IApiService';

const extendedUrl: string = 'app/' + APP_ID + '/channel/';

export const ChannelService: IApiService<IChannel> = {
    getEntity: async (channelId: string) => {
        const url = extendedUrl + channelId;
        return Pv247Service.getOne(url) as Promise<IChannel>;
    },
    getAllEntities: async () => {
        return Pv247Service.getAll(extendedUrl) as Promise<IChannel[]>;
    },
    deleteEntity: async (channelId: string) => {
        const url = extendedUrl + channelId;
        Pv247Service.delete(url, channelId);
    },
    createEntity: async (data: IChannel) => {
        return Pv247Service.create(extendedUrl, data);
    },
    editEntity: async (data: IChannel) => {
        return Pv247Service.edit(extendedUrl + data.id, data);
    }
};

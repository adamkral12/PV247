import {Pv247Service} from './Pv247Service';
import {APP_ID} from '../constants/api';
import {IMessage} from '../../Messages/model/IMessage';

export const extendedUrl: string = 'app/' + APP_ID + '/channel/';

export const MessageService = {
    getAllEntities: async (channelId: string) => {
        const url = extendedUrl + channelId + '/' + 'message';
        return Pv247Service.getAll(url) as Promise<IMessage[]>;
    },
    createEntity: async (data: IMessage) => {
        const url = extendedUrl + data.channelId + '/' + 'message';
        return Pv247Service.create(url , data);
    },
    editEntity: async (data: IMessage, channelId: string) => {
        const url = extendedUrl + channelId + '/' + 'message' + '/' + data.id;
        return Pv247Service.edit(url, data);
    },
    deleteEntity: async (messageId: string, channelId: string) => {
        const url = extendedUrl + channelId + '/' + 'message' + '/' + messageId;
        Pv247Service.delete(url);
    },

};

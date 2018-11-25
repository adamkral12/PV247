import {Pv247Service} from './Pv247Service';
import {APP_ID} from '../constants/api';
import {IChannel} from '../../Channels/models/IChannel';

export class ChannelService extends Pv247Service<IChannel> implements IApiService<IChannel> {
    private baseChannelUrl = this.basePath + 'app/' + APP_ID + '/channel/';

    public getEntity = async (channelId: string) => {
        const url = this.baseChannelUrl + channelId;
        return this.get(url);
    };

    readonly getAllEntities = async () => {
        return this.getAll(this.baseChannelUrl);
    };

    public deleteEntity = async (channelId: string) => {
        const url = this.baseChannelUrl + channelId;
        this.delete(url);
    };

    public createEntity = async (data: IChannel) => {
        return this.create(this.baseChannelUrl, data);
    };

    public editEntity = async (data: IChannel) => {
        return this.edit(this.baseChannelUrl + data.id, data);
    };
}

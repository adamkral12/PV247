import {Pv247Service} from './Pv247Service';
import {APP_ID} from '../constants/api';
import {IChannel} from '../../Channels/models/IChannel';

export class ChannelService extends Pv247Service<IChannel> {
    private baseChannelUrl = this.basePath + 'app/' + APP_ID + '/channel/';

    // public get = async (channelId: string) => {
    //     const url = this.baseChannelUrl + channelId;
    //     return super.get(url);
    // };

    public getAllChannels = async () => {
        return this.getAll(this.baseChannelUrl);
    };

    // delete = async (channelId: string) => {
    //     const url = this.baseChannelUrl + channelId;
    //     return super.delete(url);
    // };
    //
    // post = async () => {
    //     return super.post(this.baseChannelUrl);
    // };
    //
    // put = async (channelId: string) => {
    //     return super.put(this.baseChannelUrl + channelId);
    // };
}

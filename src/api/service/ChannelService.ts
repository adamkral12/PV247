import {Pv247Service} from './Pv247Service';
import {APP_ID} from '../constants/api';

export class ChannelService extends Pv247Service {
    private baseChannelUrl = super.basePath + '/app/' + APP_ID + '/channel/';

    get = async (channeld: string) => {
        const url = this.baseChannelUrl + channeld;
        return super.get(url);
    };

    getAll = async () => {
        return super.get(this.baseChannelUrl);
    };

    delete = async (channeld: string) => {
        const url = this.baseChannelUrl + channeld;
        return super.delete(url);
    };

    post = async () => {
        return super.post(this.baseChannelUrl);
    };

    put = async (channelId: string) => {
        return super.put(this.baseChannelUrl + channelId);
    };
}

import {IChannelCustomData} from './IChannelCustomData';

export interface IChannel {
    readonly id: string;
    readonly name: string;
    readonly customData: IChannelCustomData;
}

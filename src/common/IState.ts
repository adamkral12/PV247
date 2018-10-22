import { IChannelList } from '../Channels/models/IChannelList';
import {IUserApp} from '../Users/model/IUserApp';
import {IMessageApp} from '../Messages/model/IMessageApp';

export interface IState {
    readonly channelList: IChannelList;
    readonly messageApp: IMessageApp;
    readonly userApp: IUserApp;
}

import { IChannelList } from '../Channels/models/IChannelList';
import {IUserApp} from '../Users/model/IUserApp';
import {IMessageApp} from '../Messages/model/IMessageApp';
import {IAuthenticationApp} from '../Authentication/model/IAuthenticationApp';

export interface IState {
    readonly channelList: IChannelList;
    readonly messageApp: IMessageApp;
    readonly userApp: IUserApp;
    readonly authenticationApp: IAuthenticationApp;
}

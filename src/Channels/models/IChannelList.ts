import * as Immutable from 'immutable';
import { IChannel } from './IChannel';

export interface IChannelList {
    channels: Immutable.List<IChannel>;
    showEditChannelModal: boolean
}

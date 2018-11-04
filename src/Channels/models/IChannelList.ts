import * as Immutable from 'immutable';
import { IChannel } from './IChannel';
import {EditedChannels} from './EditedChannels';
import {IUser} from './IUser';
import {ChannelFilter} from '../constants/ChannelFilter';

export interface IChannelList {
    channels: IChannels;
    visibilityFilter: ChannelFilter;
    showEditModal: EditedChannels;
    users: Immutable.List<IUser>;
    selectedChannelId: string | null;
}

export interface IChannels {
    allIds: Immutable.List<string>;
    byId: Immutable.Map<string, IChannel>;
}

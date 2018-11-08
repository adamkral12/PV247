import * as Immutable from 'immutable';
import { IChannel } from './IChannel';
import {EditedChannels} from './EditedChannels';
import {IUser} from './IUser';
import {IVisibilityFilter} from './IVisibilityFilter';

export interface IChannelList {
    readonly channels: IChannels;
    readonly visibilityFilter: IVisibilityFilter;
    readonly showEditModal: EditedChannels;
    readonly users: Immutable.List<IUser>;
    readonly selectedChannelId: string | null;
    readonly showChannelList: boolean;
}

export interface IChannels {
    readonly allIds: Immutable.List<string>;
    readonly byId: Immutable.Map<string, IChannel>;
}

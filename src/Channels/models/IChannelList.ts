import * as Immutable from 'immutable';
import { IChannel } from './IChannel';
import {EditedChannels} from './EditedChannels';
import {IUser} from './IUser';
import {IVisibilityFilter} from './IVisibilityFilter';

export interface IChannelList {
    readonly channels: IChannels;
    readonly visibilityFilter: IVisibilityFilter;
    readonly editedChannelModal: EditedChannels;
    readonly users: Immutable.List<IUser>;
    readonly selectedChannelId: string;
    readonly showChannelList: boolean;
    readonly isLoading: boolean;
    readonly errorMessage?: string;
}

export interface IChannels {
    readonly allIds: Immutable.List<string>;
    readonly byId: Immutable.Map<string, IChannel>;
}

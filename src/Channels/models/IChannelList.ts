import * as Immutable from 'immutable';
import { IChannel } from './IChannel';
import {EditedChannels} from './EditedChannels';
import {IVisibilityFilter} from './IVisibilityFilter';

export interface IChannelList {
    readonly channels: IChannels;
    readonly visibilityFilter: IVisibilityFilter;
    readonly editedChannelModal: EditedChannels;
    readonly selectedChannelId: string;
    readonly showChannelList: boolean;
    readonly isLoading: boolean;
    readonly loadingErrorMessage?: string;
    readonly crudErrorMessage?: string;
}

export interface IChannels {
    readonly allIds: Immutable.List<string>;
    readonly byId: Immutable.Map<string, IChannel>;
}

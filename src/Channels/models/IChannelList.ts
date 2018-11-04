import * as Immutable from 'immutable';
import { IChannel } from './IChannel';
import {EditedChannels} from './EditedChannels';
import {IUser} from './IUser';
import {ChannelFilterEnum} from '../constants/ChannelFilterEnum';

export interface IChannelList {
    readonly channels: IChannels;
    readonly visibilityFilter: {
        readonly filter: ChannelFilterEnum;
        readonly text: string;
    }
    readonly showEditModal: EditedChannels;
    readonly users: Immutable.List<IUser>;
    readonly selectedChannelId: string | null;
}

export interface IChannels {
    readonly allIds: Immutable.List<string>;
    readonly byId: Immutable.Map<string, IChannel>;
}

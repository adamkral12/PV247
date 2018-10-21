import * as Immutable from 'immutable';
import { IChannel } from './IChannel';
import {EditedChannels} from "./EditedChannels";
import {IUser} from "./IUser";

export interface IChannelList {
    channels: Immutable.List<IChannel>;
    showEditModal: EditedChannels;
    users: Immutable.List<IUser>;
}

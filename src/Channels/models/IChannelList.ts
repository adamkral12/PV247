import * as Immutable from 'immutable';
import { IChannel } from './IChannel';
import {EditedChannels} from "./EditedChannels";

export interface IChannelList {
    channels: Immutable.List<IChannel>;
    showEditModal: EditedChannels;
}

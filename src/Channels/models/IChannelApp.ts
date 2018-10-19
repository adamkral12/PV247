import * as Immutable from 'immutable';
import { IChannel } from "./IChannel";

export interface IChannels {
    allIds: Immutable.List<string>;
    byId: Immutable.Map<string, IChannel>;
    allNames: Immutable.List<string>
}

export interface IChannelApp {
    channels: Immutable.List<IChannel>;
    // editedChannelId: string | null;
}

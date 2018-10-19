import {IChannelApp} from "../models/IChannelApp";
import {channels} from "./channels";
import {editedChannelId} from "./editedChannelId";

export const channelApp = (prevState = {} as IChannelApp, action: Action): IChannelApp => ({
    channels: channels(prevState.channels, action),
    editedChannelId: editedChannelId(prevState.editedChannelId, action)
});

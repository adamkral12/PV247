import {IChannelList} from "../models/IChannelList";
import {channels} from "./channels";

export const channelApp = (prevState = {} as IChannelList, action: Action): IChannelList => ({
    channels: channels(prevState.channels, action)
});

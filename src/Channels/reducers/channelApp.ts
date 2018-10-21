import {IChannelList} from '../models/IChannelList';
import {channels} from './channels';
import {editedChannelId} from "./editedChannelId";

export const channelApp = (prevState = {} as IChannelList, action: Action): IChannelList => ({
    channels: channels(prevState.channels, action),
    showEditModal: editedChannelId(prevState.showEditModal, action),
    users: prevState.users,
});

import {IChannelList} from '../models/IChannelList';
import {channels} from './channels';
import {showEditChannelModal} from './showEditChannelModal';

export const channelApp = (prevState = {} as IChannelList, action: Action): IChannelList => ({
    channels: channels(prevState.channels, action),
    showEditModal: showEditChannelModal(prevState.showEditModal, action),
    users: prevState.users,
});

import {IChannelList} from '../models/IChannelList';
import {channels} from './channels';
import {showEditChannelModal} from './showEditChannelModal';
import {selectedChannelId} from './selectedChannelId';
import {visibilityFilter} from './visibilityFilter';
import {showChannelList} from './showChannelList';
import {loadingChannelsResponse} from './loadingChannelsResponse';
import {isLoading} from './isLoading';
import {crudResponse} from './crudResponse';

export const channelApp = (prevState = {} as IChannelList, action: Action): IChannelList => ({
    channels: channels(prevState.channels, action),
    editedChannelModal: showEditChannelModal(prevState.editedChannelModal, action),
    users: prevState.users,
    selectedChannelId: selectedChannelId(prevState.selectedChannelId, action),
    visibilityFilter: visibilityFilter(prevState.visibilityFilter, action),
    showChannelList: showChannelList(prevState.showChannelList, action),
    isLoading: isLoading(prevState.showChannelList, action),
    loadingErrorMessage: loadingChannelsResponse(prevState.loadingErrorMessage, action),
    crudErrorMessage: crudResponse(prevState.crudErrorMessage, action)
});

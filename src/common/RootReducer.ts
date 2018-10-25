import {IState} from './IState';
import {channelApp} from '../Channels/reducers/channelApp';
import {messageApp} from '../Messages/reducers/messageApp';
import {editUserModal} from '../Users/reducers/editUserModal';

export const RootReducer = (prevState = {} as IState, action: Action): IState => ({
    channelList: channelApp(prevState.channelList, action),
    messageApp: messageApp(prevState.messageApp, action),
    userApp: editUserModal(prevState.userApp, action),
});

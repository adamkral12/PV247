import {IState} from './IState';
import {channelApp} from '../Channels/reducers/channelApp';
import {messageApp} from '../Messages/reducers/messageApp';
import {userApp} from '../Users/reducers/userApp';
import {authentication} from '../Authentication/reducers/authentication';

export const RootReducer = (prevState = {} as IState, action: Action): IState => ({
    channelList: channelApp(prevState.channelList, action),
    messageApp: messageApp(prevState.messageApp, action),
    userApp: userApp(prevState.userApp, action),
    authenticationApp: authentication(prevState.authenticationApp, action),
});

import {IMessageApp} from '../model/IMessageApp';
import {messages} from './messages';
import {user} from './user';

export const messageApp = (prevState = {} as IMessageApp, action: Action): IMessageApp => ({
    messages: messages(prevState.messages, action),
    user: user(prevState.user, action),
});

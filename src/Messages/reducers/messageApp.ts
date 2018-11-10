import {IMessageApp} from '../model/IMessageApp';
import {messages} from './messages';

export const messageApp = (prevState = {} as IMessageApp, action: Action): IMessageApp => ({
    messages: messages(prevState.messages, action)
});

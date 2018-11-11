import {IMessageApp} from '../model/IMessageApp';
import {messages} from './messages';
import {editedMessageId} from './editedMessageId';

export const messageApp = (prevState = {} as IMessageApp, action: Action): IMessageApp => ({
    messages: messages(prevState.messages, action),
    editedMessageId: editedMessageId(prevState.editedMessageId, action),
});

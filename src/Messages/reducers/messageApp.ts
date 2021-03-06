import {IMessageApp} from '../model/IMessageApp';
import {messages} from './messages';
import {editedMessageId} from './editedMessageId';
import {loadResponse} from './loadResponse';
import {crudResponse} from './crudResponse';
import {isLoading} from './isLoading';

export const messageApp = (prevState = {} as IMessageApp, action: Action): IMessageApp => ({
    messages: messages(prevState.messages, action),
    editedMessageId: editedMessageId(prevState.editedMessageId, action),
    isLoading: isLoading(prevState.isLoading, action),
    loadingErrorMessage: loadResponse(prevState.loadingErrorMessage, action),
    crudErrorMessage: crudResponse(prevState.crudErrorMessage, action),
});

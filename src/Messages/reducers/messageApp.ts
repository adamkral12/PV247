import {IMessageApp} from '../model/IMessageApp';
import {messages} from './messages';
import {editedMessageId} from './editedMessageId';
import {loadMessagesRespone} from './loadMessagesRespone';
import {crudResponse} from './crudResponse';
import {isLoading} from './isLoading';
/*
import {isLoading} from '../../Channels/reducers/isLoading';
import {showMessages} from './showMessages';*/

export const messageApp = (prevState = {} as IMessageApp, action: Action): IMessageApp => ({
    messages: messages(prevState.messages, action),
    editedMessageId: editedMessageId(prevState.editedMessageId, action),
    /*showMessages: showMessages(prevState.showMessages, action)*/
    isLoading: isLoading(prevState.isLoading, action),
    loadingErrorMessage: loadMessagesRespone(prevState.loadingErrorMessage, action),
    crudErrorMessage: crudResponse(prevState.crudErrorMessage, action)
});

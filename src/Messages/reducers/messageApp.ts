import {IMessageApp} from '../model/IMessageApp';
import {messages} from './messages';
import {editedMessageId} from './editedMessageId';
/*import {apiResponse} from '../../Channels/reducers/apiResponse';
import {isLoading} from '../../Channels/reducers/isLoading';
import {showMessages} from './showMessages';*/

export const messageApp = (prevState = {} as IMessageApp, action: Action): IMessageApp => ({
    messages: messages(prevState.messages, action),
    editedMessageId: editedMessageId(prevState.editedMessageId, action)
    /*showMessages: showMessages(prevState.showMessages, action)
    isLoading: isLoading(prevState.showMessages, action)
    errorMessage: apiResponse(prevState.errorMessage, action),*/
});

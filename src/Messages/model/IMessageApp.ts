import * as Immutable from 'immutable';
import {IMessage} from './IMessage';

export interface IMessageApp {
    readonly messages: IMessages;
    readonly editedMessageId: Uuid | null;
    /*readonly showMessages: boolean;
    readonly isLoading: boolean;*/
    readonly loadingErrorMessage?: string;
    readonly crudErrorMessage?: string;
}

export interface IMessages {
    readonly allIds: Immutable.List<Uuid>;
    readonly byId: Immutable.Map<Uuid, IMessage>;
}


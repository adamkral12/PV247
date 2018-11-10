import * as Immutable from 'immutable';
import {IMessage} from './IMessage';

export interface IMessageApp {
    messages: IMessages;
}

export interface IMessages {
    allIds: Immutable.List<Uuid>;
    byId: Immutable.Map<Uuid, IMessage>;
}


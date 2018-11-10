import * as Immutable from 'immutable';
import {IMessage} from './IMessage';

export interface IMessageApp {
    readonly messages: IMessages;
}

export interface IMessages {
    readonly allIds: Immutable.List<Uuid>;
    readonly byId: Immutable.Map<Uuid, IMessage>;
}


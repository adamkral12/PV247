import * as Immutable from 'immutable';
import {IMessage} from './IMessage';
import {IUser} from '../../Channels/models/IUser';

export interface IMessageApp {
    readonly messages: Immutable.List<IMessage>;
    readonly user: IUser;
}

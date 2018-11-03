import * as Immutable from "immutable";
import {IMessage} from "./IMessage";
import {IUser} from "../../Channels/models/IUser";

export interface IMessageApp {
    messages: IMessages;
    readonly user: IUser;
}

export interface IMessages {
    allIds: Immutable.List<Uuid>;
    byId: Immutable.Map<Uuid, IMessage>;
}


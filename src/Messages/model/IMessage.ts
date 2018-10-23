import {IMessageCustomData} from "./IMessageCustomData";

export interface IMessage {
    readonly id: string;
    readonly value: string;
    //TODO: special format for dateTime?
    readonly createdAt: string;
    readonly createdBy: string;
    readonly updatedAt: string;
    readonly updatedBy: string;
    readonly customData: IMessageCustomData;
}

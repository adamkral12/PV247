import {IMessageCustomData} from './IMessageCustomData';

export interface IMessage {
    readonly id: Uuid;
    readonly channelId: Uuid;
    readonly value: string;
    // TODO: special format for dateTime?
    readonly createdAt: string;
    readonly createdBy: string;
    readonly updatedAt: string | null;
    readonly updatedBy: string | null;
    readonly customData: IMessageCustomData;
}

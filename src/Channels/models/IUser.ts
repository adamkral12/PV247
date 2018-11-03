import {IUserCustomData} from './IUserCustomData';

export interface IUser {
    readonly email: string;
    readonly customData: IUserCustomData;
}

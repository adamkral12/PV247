import {IUser} from '../../Channels/models/IUser';

export interface IUserApp {
    readonly user: IUser,
    readonly showEditModal: boolean
}

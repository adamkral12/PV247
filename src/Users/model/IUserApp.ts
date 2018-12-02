import * as Immutable from 'immutable';
import {IUser} from '../../Channels/models/IUser';

export interface IUserApp {
    readonly showEditUserModal: boolean;
    readonly users: IUsers;
    readonly user: IUser;
    readonly isEditModalLoading;
    readonly apiErrorResponse?: string;
}

export interface IUsers {
    readonly allIds: Immutable.List<string>;
    readonly byId: Immutable.Map<string, IUser>;
}

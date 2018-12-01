import {Pv247Service} from './Pv247Service';
import {APP_ID} from '../constants/api';
import {IUser} from '../../Channels/models/IUser';
import {IApiService} from '../model/IApiService';

const extendedUrl: string = APP_ID + '/user';

export const UserService: IApiService<IUser> = {
    getEntity: async (userId: string) => {
        const url = extendedUrl + '/' + userId;
        return Pv247Service.getOne(url) as Promise<IUser>;
    },
    getAllEntities: async () => {
        return Pv247Service.getAll(extendedUrl) as Promise<IUser[]>;
    },
    deleteEntity: async (userId: string) => {
        const url = extendedUrl + '/' + userId;
        Pv247Service.delete(url);
    },
    createEntity: async (data: IUser) => {
        return Pv247Service.create(extendedUrl, data);
    },
    editEntity: async (data: IUser) => {
        return Pv247Service.edit(extendedUrl + '/' + data.email, data);
    }
};

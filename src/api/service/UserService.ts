import {Pv247Service} from './Pv247Service';
import {APP_ID} from '../constants/api';
import {IUser} from '../../Channels/models/IUser';
import {IApiService} from '../model/IApiService';

const extendedUrl: string = APP_ID + '/user';

export const UserService: IApiService<IUser> = {
    getEntity: async (userId: string) => {
        const url = extendedUrl + '/' + userId;
        return <Promise<IUser>>Pv247Service.getOne(url);
    },
    getAllEntities: async () => {
        return <Promise<IUser[]>>Pv247Service.getAll(this.extendedUrl());
    },
    deleteEntity: async (userId: string) => {
        const url = this.extendedUrl() + '/' + userId;
        return <Promise<void>>Pv247Service.delete(url, userId);
    },
    createEntity: async (data: IUser) => {
        return Pv247Service.create(this.extendedUrl(), data);
    },
    editEntity: async (data: IUser) => {
        return Pv247Service.edit(this.extendedUrl() + '/' + data.email, data);
    }
};

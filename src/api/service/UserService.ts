import {Pv247Service} from './Pv247Service';
import {APP_ID} from '../constants/api';
import {IUser} from '../../Channels/models/IUser';

export class UserService extends Pv247Service<IUser> implements IApiService<IUser> {
    private baseUserUrl = this.basePath + APP_ID + '/user';

    public getEntity = async (userId: string) => {
        const url = this.baseUserUrl + '/' + userId;
        return this.getOne(url);
    };

    readonly getAllEntities = async () => {
        return this.getAll(this.baseUserUrl);
    };

    public deleteEntity = async (userId: string) => {
        const url = this.baseUserUrl + '/' + userId;
        this.delete(url, userId);
    };

    public createEntity = async (data: IUser) => {
        return this.create(this.baseUserUrl, data);
    };

    public editEntity = async (data: IUser) => {
        return this.edit(this.baseUserUrl + '/' + data.email, data);
    };
}

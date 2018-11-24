import {GenericService} from './GenericService';
import {BASE_API_URL} from '../constants/api';

export abstract class Pv247Service<T> extends GenericService {
    readonly basePath = BASE_API_URL;

    public getAll = async (url: string): Promise<T[]> => {
        return this.get(url)
            .then(response => {
                return response.json();
            }
        );
    };
}

import {GenericService} from './GenericService';
import {BASE_API_URL} from '../constants/api';
import {validateResponse} from './validateResponse';

export abstract class Pv247Service<T> extends GenericService {
    readonly basePath = BASE_API_URL;

    protected getAll = async (url: string): Promise<T[]> => {
        return this.get(url)
            .then(response => {
                return validateResponse(response.json());
            }
        );
    };

    protected create = async (url: string, data: T): Promise<T> => {
        return this.post(url, data)
            .then(response => {
                return validateResponse(response.json());
            }
        );
    };

    protected edit = async (url: string, data: T): Promise<T> => {
        return this.put(url, data)
            .then(response => {
                    return validateResponse(response.json());
                }
            );
    };
}

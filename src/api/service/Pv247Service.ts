import {GenericService} from './GenericService';
import {BASE_API_URL} from '../constants/api';
import {validateResponse} from './validateResponse';

export abstract class Pv247Service<T> {
    readonly basePath = BASE_API_URL;
    protected getAll = async (url: string): Promise<T[]> => {
        return GenericService.get(url)
            .then(response => {
                return validateResponse(response);
            }
        );
    };

    protected getOne = async (url: string): Promise<T> => {
        return GenericService.get(url)
            .then(response => {
                    return validateResponse(response);
                }
            );
    };

    protected create = async (url: string, data: T): Promise<T> => {
        return GenericService.post(url, data)
            .then(response => {
                return validateResponse(response);
            }
        );
    };

    protected edit = async (url: string, data: T): Promise<T> => {
        return GenericService.put(url, data)
            .then(response => {
                    return validateResponse(response);
                }
            );
    };

    protected delete = async (url: string, id: string): Promise<T> => {
        return GenericService.delete(url + id)
            .then(response => {
                    return validateResponse(response);
                }
            );
    };
}

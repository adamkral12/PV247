import {GenericService} from './GenericService';
import {BASE_API_URL} from '../constants/api';
import {validateResponse} from './validateResponse';

interface Service {
    getAll<T>(url: string): Promise<T[]>;
    getOne<T>(url: string): Promise<T>;
    create<T>(url: string, data: T): Promise<T>;
    edit<T>(url: string, t: T): Promise<T>;
    delete<T>(url: string): Promise<T>;
    uploadFile(file: any): Promise<any>;
}

export const Pv247Service: Service = {
    getAll: async (url: string) => {
        return GenericService.get(BASE_API_URL + url)
            .then(response => {
                return validateResponse(response);
            }
        );
    },
    getOne: async (url: string) => {
        return GenericService.get(BASE_API_URL + url)
            .then(response => {
                    return validateResponse(response);
                }
            );
    },
    create: async (url, data) => {
        return GenericService.post(BASE_API_URL + url, data)
            .then(response => {
                return validateResponse(response);
            }
        );
    },
    edit: async (url, data) => {
        return GenericService.put(BASE_API_URL + url, data)
            .then(response => {
                    return validateResponse(response);
                }
            );
    },
    delete: async (url: string) => {
        return GenericService.delete(BASE_API_URL + url)
            .then(response => {
                    return validateResponse(response);
                }
            );
    },
    //TODO: what type is file?
    uploadFile: async (file: any) => {
        const formData  = new FormData();
        formData.append('Files', file);
        console.log('form data');
        console.log(formData);
        return GenericService.post(BASE_API_URL + 'file', formData)
            .then(
                response => {
                    return validateResponse(response);
                }
            )
    }
};

import {HTTP_METHOD_DELETE, HTTP_METHOD_GET, HTTP_METHOD_POST, HTTP_METHOD_PUT} from '../constants/api';

export abstract class GenericService implements IApiService {
    delete = async (url: string) => {
        return fetch(
                url,
            {
                method: HTTP_METHOD_DELETE,
            }
        );
    };

    get = async (url: string) => {
        return fetch(
            url,
            {
                method: HTTP_METHOD_GET,
            }
        );
    };

    post = async (url: string) => {
        return fetch(
            url,
            {
                method: HTTP_METHOD_POST,
            }
        )
    };

    put = async (url: string) => {
        return fetch(
            url,
            {
                method: HTTP_METHOD_PUT,
            }
        )
    };
}

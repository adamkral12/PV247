import {AUTH_TOKEN_STORAGE_KEY, CONTENT_TYPE_PATCH_JSON, HTTP_METHOD_DELETE, HTTP_METHOD_GET, HTTP_METHOD_POST, HTTP_METHOD_PUT} from '../constants/api';

export const GenericService = {
    delete:  async (url: string) => {
        return fetch(
                url,
            {
                method: HTTP_METHOD_DELETE,
                headers: {
                    Authorization: `bearer ${localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)}`,
                    'Content-Type': CONTENT_TYPE_PATCH_JSON,
                }
            }
        );
    },
    get: async (url: string) => {
        return fetch(
            url,
            {
                method: HTTP_METHOD_GET,
                headers: {
                    Authorization: `bearer ${localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)}`
                }
            }
        );
    },
    post: async (url: string, data: any, contentType: string | null = CONTENT_TYPE_PATCH_JSON) => {
        const headers = {
            Authorization: `bearer ${localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)}`,
        };

        if (contentType) {
            headers['Content-Type'] = contentType;
        }

        const jsonBody = data instanceof FormData ? data : JSON.stringify(data);
        return fetch(
            url,
            {
                method: HTTP_METHOD_POST,
                body: jsonBody,
                headers,
            }
        );
    },
    put: async (url: string, data: any) => {
        return fetch(
            url,
            {
                method: HTTP_METHOD_PUT,
                body: JSON.stringify(data),
                headers: {
                    Authorization: `bearer ${localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)}`,
                    'Content-Type': CONTENT_TYPE_PATCH_JSON,
                },
            }
        );
    }
};

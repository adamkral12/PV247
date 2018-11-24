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

    public get = async (url: string) => {
        return fetch(
            url,
            {
                method: HTTP_METHOD_GET,
                headers: {
                    'Authorization': `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZGFtLmtyYWxAa2l3aS5jb20iLCJqdGkiOiJiMmVmNmFjNS1iMzRmLTRjN2MtYjA3NC1kNzdjOTUyNmY5MzQiLCJpYXQiOjE1NDMwNzE5NjgsIm5iZiI6MTU0MzA3MTk2OCwiZXhwIjoxNTQzMTU4MzY4LCJpc3MiOiJQVjI0NyBBUEkiLCJhdWQiOiJQVjI0NyBTdHVkZW50cyJ9.m2vPoYlA_Tlbmh9eDwSfszotBk1_5J0B25hHDxs_Zfg`
                }
            }
        );
    };

    post = async (url: string) => {
        return fetch(
            url,
            {
                method: HTTP_METHOD_POST,
            }
        );
    };

    put = async (url: string) => {
        return fetch(
            url,
            {
                method: HTTP_METHOD_PUT,
            }
        );
    };
}

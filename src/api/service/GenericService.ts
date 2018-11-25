import {HTTP_METHOD_DELETE, HTTP_METHOD_GET, HTTP_METHOD_POST, HTTP_METHOD_PUT} from '../constants/api';

export abstract class GenericService {
    protected delete = async (url: string) => {
        return fetch(
                url,
            {
                method: HTTP_METHOD_DELETE,
                headers: {
                    'Authorization': `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZGFtLmtyYWxAa2l3aS5jb20iLCJqdGkiOiJiMmVmNmFjNS1iMzRmLTRjN2MtYjA3NC1kNzdjOTUyNmY5MzQiLCJpYXQiOjE1NDMwNzE5NjgsIm5iZiI6MTU0MzA3MTk2OCwiZXhwIjoxNTQzMTU4MzY4LCJpc3MiOiJQVjI0NyBBUEkiLCJhdWQiOiJQVjI0NyBTdHVkZW50cyJ9.m2vPoYlA_Tlbmh9eDwSfszotBk1_5J0B25hHDxs_Zfg`,
                    'Content-Type': 'application/json-patch+json',
                }
            }
        );
    };

    protected get = async (url: string) => {
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

    protected post = async (url: string, data: any) => {
        return fetch(
            url,
            {
                method: HTTP_METHOD_POST,
                body: JSON.stringify(data),
                headers: {
                    'Authorization': `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZGFtLmtyYWxAa2l3aS5jb20iLCJqdGkiOiJiMmVmNmFjNS1iMzRmLTRjN2MtYjA3NC1kNzdjOTUyNmY5MzQiLCJpYXQiOjE1NDMwNzE5NjgsIm5iZiI6MTU0MzA3MTk2OCwiZXhwIjoxNTQzMTU4MzY4LCJpc3MiOiJQVjI0NyBBUEkiLCJhdWQiOiJQVjI0NyBTdHVkZW50cyJ9.m2vPoYlA_Tlbmh9eDwSfszotBk1_5J0B25hHDxs_Zfg`,
                    'Content-Type': 'application/json-patch+json',
                }
            }
        );
    };

    protected put = async (url: string, data: any) => {
        return fetch(
            url,
            {
                method: HTTP_METHOD_PUT,
                body: JSON.stringify(data),
                headers: {
                    'Authorization': `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZGFtLmtyYWxAa2l3aS5jb20iLCJqdGkiOiJiMmVmNmFjNS1iMzRmLTRjN2MtYjA3NC1kNzdjOTUyNmY5MzQiLCJpYXQiOjE1NDMwNzE5NjgsIm5iZiI6MTU0MzA3MTk2OCwiZXhwIjoxNTQzMTU4MzY4LCJpc3MiOiJQVjI0NyBBUEkiLCJhdWQiOiJQVjI0NyBTdHVkZW50cyJ9.m2vPoYlA_Tlbmh9eDwSfszotBk1_5J0B25hHDxs_Zfg`,
                    'Content-Type': 'application/json-patch+json',
                },
            }
        );
    };
}

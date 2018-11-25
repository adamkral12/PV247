import {AUTH_TOKEN_STORAGE_KEY, BASE_API_URL, CONTENT_TYPE_PATCH_JSON, HTTP_METHOD_POST} from '../constants/api';
import {validateResponse} from './validateResponse';

export const auth = (email: string) => {
    fetch(
        BASE_API_URL + "auth", {
            method: HTTP_METHOD_POST,
            body: JSON.stringify({email}),
            headers: {
                'Content-Type': CONTENT_TYPE_PATCH_JSON,
            }
        }
    ).then((response) => {
        response = validateResponse(response);
        response.json().then((json) => {
            //TODO: set expiration
            localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, json.token)
        });
    })
};

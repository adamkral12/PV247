import {BASE_API_URL, CONTENT_TYPE_PATCH_JSON, HTTP_METHOD_POST} from '../constants/api';
import {validateResponse} from './validateResponse';

export const auth = async (email: string) => {
    return fetch(
        BASE_API_URL + "auth", {
            method: HTTP_METHOD_POST,
            body: JSON.stringify({email}),
            headers: {
                'Content-Type': CONTENT_TYPE_PATCH_JSON,
            }
        }
    ).then((response) => {
        return validateResponse(response);
    });
};

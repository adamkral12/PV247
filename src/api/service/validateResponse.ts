export const validateResponse = (response) => {
    if (response.status === 204) {
        return;
    }

    if (response.status >= 200 && response.status < 300) {
        return response.json();
    }

    else {
        const errorMessage = response.statusText || `Something went wrong (ending up in ${response.status})`;
        throw new Error(errorMessage);
    }
};

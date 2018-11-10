import {MESSAGE_APP_CANCEL_EDITING_MESSAGE, MESSAGE_APP_EDIT_MESSAGE, MESSAGE_APP_START_EDITING_MESSAGE} from '../constants/actionTypes';

export const editedMessageId = (prevState: Uuid | null = null, action: Action): Uuid | null => {
    switch (action.type) {
        case MESSAGE_APP_START_EDITING_MESSAGE:
            return action.payload.id;

        case MESSAGE_APP_EDIT_MESSAGE:
        case MESSAGE_APP_CANCEL_EDITING_MESSAGE:
            return null;

        default:
            return prevState;
    }
};

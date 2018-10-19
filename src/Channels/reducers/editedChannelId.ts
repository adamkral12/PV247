import {
    CHANNEL_APP_CHANNEL_EDITING_CANCELLED,
    CHANNEL_APP_CHANNEL_EDITING_STARTED,
    CHANNEL_APP_CHANNEL_UPDATE_STARTED,
} from '../constants/actionTypes';

export const editedChannelId = (prevState: string | null = null, action: Action): string | null => {
    switch (action.type) {
        case CHANNEL_APP_CHANNEL_EDITING_STARTED:
            return action.payload.id;

        case CHANNEL_APP_CHANNEL_UPDATE_STARTED:
        case CHANNEL_APP_CHANNEL_EDITING_CANCELLED:
            return null;

        default:
            return prevState;
    }
};

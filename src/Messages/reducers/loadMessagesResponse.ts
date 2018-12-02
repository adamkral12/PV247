
import {
    CHANNEL_APP_SELECT_CHANNEL_FAILURE,
    CHANNEL_APP_SELECT_CHANNEL_SUCCESS
} from '../../Channels/constants/actionTypes';

export const loadMessagesResponse = (prevState: string | undefined, action: Action): string | undefined => {
    switch (action.type) {
        case CHANNEL_APP_SELECT_CHANNEL_SUCCESS:
            return undefined;
        case CHANNEL_APP_SELECT_CHANNEL_FAILURE:
            return action.payload.message;
        default:
            return prevState;
    }
};

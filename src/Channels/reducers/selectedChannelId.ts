import {
    CHANNEL_APP_CHANNEL_REMOVE_SUCCESS,
    CHANNEL_APP_SELECT_CHANNEL_SUCCESS
} from '../constants/actionTypes';

export const selectedChannelId = (prevState: string, action: Action): string => {
    switch (action.type) {
        case CHANNEL_APP_SELECT_CHANNEL_SUCCESS:
            return action.payload.id;

        case CHANNEL_APP_CHANNEL_REMOVE_SUCCESS:
            if (action.payload.channelId === prevState) {
                return '';
            }
            else {
                return prevState;
            }
        default:
            return prevState;
    }
};

import {CHANNEL_APP_SELECT_CHANNEL} from '../constants/actionTypes';

export const selectedChannelId = (prevState: string | null = null, action: Action): string | null => {
    switch (action.type) {
        case CHANNEL_APP_SELECT_CHANNEL:
            return action.payload.id;
        default:
            return prevState;
    }
};
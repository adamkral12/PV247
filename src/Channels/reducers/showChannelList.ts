import {CHANNEL_LIST_HIDE_LIST, CHANNEL_LIST_SHOW_LIST} from '../constants/actionTypes';

export const showChannelList = (prevState: boolean, action: Action): boolean => {
    switch (action.type) {
        case CHANNEL_LIST_SHOW_LIST:
            return true;
        case CHANNEL_LIST_HIDE_LIST:
            return false;
        default:
            return prevState;
    }
};

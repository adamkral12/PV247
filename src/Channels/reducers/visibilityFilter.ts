import { CHANNEL_APP_SET_VISIBILITY_FILTER } from '../constants/actionTypes';
import {ChannelFilter} from '../constants/ChannelFilter';

export const visibilityFilter = (prevState: ChannelFilter = ChannelFilter.All, action: Action): ChannelFilter => {
    switch (action.type) {
        case CHANNEL_APP_SET_VISIBILITY_FILTER:
            return action.payload.filter;

        default:
            return prevState;
    }
};

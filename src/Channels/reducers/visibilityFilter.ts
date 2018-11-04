import { CHANNEL_APP_SET_VISIBILITY_FILTER } from '../constants/actionTypes';
import {ChannelFilterEnum} from '../constants/ChannelFilterEnum';

// todo add type for filter
export const visibilityFilter = (prevState = {filter: ChannelFilterEnum.All, text: ''}, action: Action) => {
    switch (action.type) {
        case CHANNEL_APP_SET_VISIBILITY_FILTER:
            return {
                filter: action.payload.filter,
                text: action.payload.text,
            };

        default:
            return prevState;
    }
};

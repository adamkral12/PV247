import { CHANNEL_APP_SET_VISIBILITY_FILTER } from '../constants/actionTypes';
import {ChannelFilterEnum} from '../constants/ChannelFilterEnum';
import {IVisibilityFilter} from '../models/IVisibilityFilter';

export const visibilityFilter = (prevState: IVisibilityFilter = {filter: ChannelFilterEnum.All, text: ''}, action: Action) => {
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

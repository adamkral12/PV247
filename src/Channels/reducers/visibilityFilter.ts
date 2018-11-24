import { CHANNEL_APP_SET_VISIBILITY_FILTER } from '../constants/actionTypes';
import {IVisibilityFilter} from '../models/IVisibilityFilter';

export const visibilityFilter = (prevState: IVisibilityFilter = {text: ''}, action: Action): IVisibilityFilter => {
    switch (action.type) {
        case CHANNEL_APP_SET_VISIBILITY_FILTER:
            return {
                text: action.payload.text,
            };

        default:
            return prevState;
    }
};

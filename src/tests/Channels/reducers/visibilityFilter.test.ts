import {visibilityFilter} from '../../../Channels/reducers/visibilityFilter';
import {CHANNEL_APP_SET_VISIBILITY_FILTER} from '../../../Channels/constants/actionTypes';

describe('visibility filter reducer', () =>  {
    it('setting visibility filter should return text', () => {
        expect(visibilityFilter(undefined, {
            type: CHANNEL_APP_SET_VISIBILITY_FILTER,
            payload: {
                text: 'SearchChannel'
            }
        })).toEqual({ text: 'SearchChannel' });
    });
});

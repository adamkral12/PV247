import {mockStore} from '../../utils/mockStore';
import {hideChannelList, hideEditChannel, setVisibilityFilter, showChannelList, showCreateChannel, showEditChannel} from '../../../Channels/actions/visibility';
import {CHANNEL_APP_HIDE_EDIT_CHANNEL, CHANNEL_APP_SET_VISIBILITY_FILTER, CHANNEL_APP_SHOW_CREATE_CHANNEL, CHANNEL_APP_SHOW_EDIT_CHANNEL, CHANNEL_LIST_HIDE_LIST, CHANNEL_LIST_SHOW_LIST} from '../../../Channels/constants/actionTypes';

describe('channel visibility action', () => {
    it('dispatch show create channel', () => {
        const store = mockStore();
        store.dispatch(showCreateChannel());
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CHANNEL_APP_SHOW_CREATE_CHANNEL});
    });

    it('dispatch hide edit channel', () => {
        const store = mockStore();
        store.dispatch(hideEditChannel());
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CHANNEL_APP_HIDE_EDIT_CHANNEL});
    });

    it('dispatch show edit channel', () => {
        const store = mockStore();
        store.dispatch(showEditChannel('id'));
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CHANNEL_APP_SHOW_EDIT_CHANNEL, payload: {id: 'id'}});
    });

    it('dispatch set visibility filter', () => {
        const store = mockStore();
        store.dispatch(setVisibilityFilter('text'));
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CHANNEL_APP_SET_VISIBILITY_FILTER, payload: {text: 'text'}});
    });

    it('dispatch show channel list', () => {
        const store = mockStore();
        store.dispatch(showChannelList());
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CHANNEL_LIST_SHOW_LIST});
    });

    it('dispatch hide channel list', () => {
        const store = mockStore();
        store.dispatch(hideChannelList());
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: CHANNEL_LIST_HIDE_LIST});
    });
});

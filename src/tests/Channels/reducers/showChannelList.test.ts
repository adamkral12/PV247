import {showChannelList} from '../../../Channels/reducers/showChannelList';
import {CHANNEL_LIST_HIDE_LIST, CHANNEL_LIST_SHOW_LIST} from '../../../Channels/constants/actionTypes';

describe("show channel list reducer tests", () => {
   it("showing action should return true", () => {
       expect(showChannelList(false, {
           type: CHANNEL_LIST_SHOW_LIST,
       })).toEqual(true);
   });

    it("hiding action should return false", () => {
        expect(showChannelList(true, {
            type: CHANNEL_LIST_HIDE_LIST,
        })).toEqual(false);
    });
});
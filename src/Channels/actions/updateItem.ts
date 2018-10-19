import {IChannelCustomData} from "../models/IChannelCustomData";
import {CHANNEL_LIST_CHANNEL_UPDATE} from "../constants/actionTypes";

export const updateChannel = (id: string, name: string, customData: IChannelCustomData): Action => ({
    type: CHANNEL_LIST_CHANNEL_UPDATE,
    payload: {
        id,
        name,
        customData,
    }
});


export const toggleChannel = (id: string): Action => ({
    type: CHANNEL_LIST_CHANNEL_UPDATE,
    payload: {
        id
    }
});

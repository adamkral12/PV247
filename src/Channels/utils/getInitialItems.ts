import * as Immutable from "immutable";
import {IChannel} from "../models/IChannel";
// import {fromJS} from "immutable";
import {CHANNELS_DATA} from "../../utils/exportData";
import {IState} from "../../common/IState";

export const getInitialState = (): IState => {
    return {
        channelApp: {
            channels: Immutable.List<IChannel>(CHANNELS_DATA)
        }
    }
};

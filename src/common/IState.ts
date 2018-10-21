import { IChannelList } from '../Channels/models/IChannelList';
import {IMessageBoardStateProps} from "../Messages/components/MessageBoard";

export interface IState {
    channelList: IChannelList;
    messageApp: IMessageBoardStateProps;
}

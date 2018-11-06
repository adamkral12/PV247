import {ChannelFilterEnum} from '../constants/ChannelFilterEnum';

export interface IVisibilityFilter {
    readonly filter: ChannelFilterEnum;
    readonly text: string;
}

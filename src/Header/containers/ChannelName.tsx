import {connect} from 'react-redux';
import {IState} from '../../common/IState';
import {ChannelName, IChannelNameStateProps} from '../components/ChannelName';

const mapStateToProps = (state: IState): IChannelNameStateProps => {
    const channel = state.channelList.selectedChannelId === null ? null : state.channelList.channels.byId.get(state.channelList.selectedChannelId);
    return {
        channelName: channel ? channel.name : null
    };
};

export const ChannelNameContainer = connect<IChannelNameStateProps>(mapStateToProps)(ChannelName);

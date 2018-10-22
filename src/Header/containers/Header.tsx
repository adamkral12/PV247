import {connect} from "react-redux";
import {IState} from "../../common/IState";
import {IChannel} from "../../Channels/models/IChannel";
import {ChannelName, ICHannelNameStateProps} from "../components/ChannelName";

const mapStateToProps = (state: IState): ICHannelNameStateProps => {
    const channel = state.channelList.channels.find(
        (i: IChannel) => i.id === state.channelList.selectedChannelId
    );
    return {
        channelName: channel ? channel.name : null
    };
};

export const ChannelNameContainer = connect<ICHannelNameStateProps>(mapStateToProps)(ChannelName);

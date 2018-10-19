import {connect} from "react-redux";
import {ChannelList, IChannelListStateProps} from "../components/ChannelList";
import {IState} from "../../common/IState";

const mapStateToProps = (state: IState): IChannelListStateProps => {
    console.log("list");
    console.log(state);
    return {
        channels: state.channelApp.channels,
    };
};

export const ChannelListContainer = connect<IChannelListStateProps>(mapStateToProps)(ChannelList);

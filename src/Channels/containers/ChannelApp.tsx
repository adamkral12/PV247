import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IState } from "../../common/IState";
import { ChannelApp, IChannelAppDispatchProps, IChannelAppStateProps } from "../components/ChannelApp";
import { IChannel } from "../models/IChannel";
import { IChannelCustomData } from "../models/IChannelCustomData";
import { createChannel } from "../actions/actionCreators";

const mapStateToProps = (state: IState): IChannelAppStateProps => {
  return {
    channels: state.channelList.channels.map((i: IChannel) => i.name).toList()
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IChannelAppDispatchProps => {
  return {
    onAddChannel: (name: string, customData: IChannelCustomData) => dispatch(createChannel(name, customData)),
  };
};

export const ChannelAppContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelApp);

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IState } from "../../common/IState";
import { ChannelApp, IChannelAppDispatchProps, IChannelAppStateProps } from "../components/ChannelApp";
import { IChannelCustomData } from "../models/IChannelCustomData";
import { createChannel } from "../actions/actionCreators";

const mapStateToProps = (state: IState): IChannelAppStateProps => {
  console.log("channel app container");
  console.log(state);
  return {
    channels: state.channelApp.channels
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IChannelAppDispatchProps => {
  return {
    onAddChannel: (name: string, customData: IChannelCustomData) => dispatch(createChannel(name, customData)),
  };
};

export const ChannelAppContainer = connect<IChannelAppStateProps, IChannelAppDispatchProps>(mapStateToProps, mapDispatchToProps)(ChannelApp);

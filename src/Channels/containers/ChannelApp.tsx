import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IState } from '../../common/IState';
import { ChannelApp, IChannelAppDispatchProps, IChannelAppStateProps } from '../components/ChannelApp';
import { createChannel } from '../actions/actionCreators';

const mapStateToProps = (state: IState): IChannelAppStateProps => {
  console.log(state);
  return {
    channels: state.channelList.channels.toList(),
    editedChannels: state.channelList.showEditModal,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IChannelAppDispatchProps => {
  return {
    onAddChannel: (name: string ) => dispatch(createChannel(name)),
  };
};

export const ChannelAppContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelApp);

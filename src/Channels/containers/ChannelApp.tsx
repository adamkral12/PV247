import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IState } from '../../common/IState';
import { ChannelApp, IChannelAppDispatchProps, IChannelAppStateProps } from '../components/ChannelApp';
import {showCreateChannel} from "../actions/actionCreators";

const mapStateToProps = (state: IState): IChannelAppStateProps => {
    return {
        channels: state.channelList.channels.toList(),
        editedChannels: state.channelList.showEditModal,
        users: state.channelList.users,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IChannelAppDispatchProps => {
  return {
    onAddChannel: () => dispatch(showCreateChannel()),
  };
};

export const ChannelAppContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelApp);

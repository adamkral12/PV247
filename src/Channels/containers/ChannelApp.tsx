import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IState } from '../../common/IState';
import { ChannelApp, IChannelAppDispatchProps, IChannelAppStateProps } from '../components/ChannelApp';
import {showCreateChannel} from '../actions/actionCreators';
import {loadChannels} from '../actions/loadChannels';

const mapStateToProps = (state: IState): IChannelAppStateProps => {
    return {
        editedChannels: state.channelList.showEditModal,
        users: state.channelList.users,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IChannelAppDispatchProps => {
  return {
      loadChannels: () => dispatch(loadChannels()),
      onAddChannel: () => dispatch(showCreateChannel()),
  };
};

export const ChannelAppContainer = connect<IChannelAppStateProps, IChannelAppDispatchProps>(mapStateToProps, mapDispatchToProps)(ChannelApp);

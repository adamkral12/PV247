import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IState } from '../../common/IState';
import { ChannelApp, IChannelAppDispatchProps, IChannelAppStateProps } from '../components/ChannelApp';
import {hideChannelList, showCreateChannel} from '../actions/actionCreators';
import {loadChannels} from '../actions/loadChannels';

const mapStateToProps = (state: IState): IChannelAppStateProps => {
    return {
        editedChannels: state.channelList.showEditModal,
        users: state.channelList.users,
        showListOnMobile: state.channelList.showChannelList,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IChannelAppDispatchProps => {
  return {
      loadChannels: () => dispatch(loadChannels()),
      onAddChannel: () => dispatch(showCreateChannel()),
      onHideChannelListMobile: () => dispatch(hideChannelList()),
  };
};

export const ChannelAppContainer = connect<IChannelAppStateProps, IChannelAppDispatchProps>(mapStateToProps, mapDispatchToProps)(ChannelApp);

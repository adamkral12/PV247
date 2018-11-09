import {IState} from '../../common/IState';
import {Channel, IChannelDispatchProps, IChannelOwnProps, IChannelStateProps} from '../components/Channel';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {hideChannelList, selectChannel, showEditChannel} from '../actions/actionCreators';

const mapStateToProps = (state: IState, ownProps: IChannelOwnProps): IChannelStateProps => {
    return {
        channel: state.channelList.channels.byId.get(ownProps.id),
        isSelected: state.channelList.selectedChannelId === ownProps.id,
    };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IChannelOwnProps): IChannelDispatchProps => {
    return {
        showEditChannel: () => dispatch(showEditChannel(ownProps.id)),
        selectChannel: () => dispatch(selectChannel(ownProps.id)),
        hideChannelList: () => dispatch(hideChannelList()),
    };
};

export const ChannelContainer = connect<IChannelStateProps , IChannelDispatchProps, IChannelOwnProps>(mapStateToProps, mapDispatchToProps)(Channel);

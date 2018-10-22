import {IState} from '../../common/IState';
import {Channel, IChannelDispatchProps, IChannelOwnProps, IChannelStateProps} from '../components/Channel';
import {IChannel} from '../models/IChannel';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {selectChannel, showEditChannel} from '../actions/actionCreators';

const mapStateToProps = (state: IState, ownProps: IChannelOwnProps): IChannelStateProps => {
    console.log('selected');
    console.log(state.channelList.showEditModal.editedChannelId);
    console.log(ownProps);
    console.log(state.channelList.selectedChannelId === ownProps.id);
    return {
        channel: state.channelList.channels.find((i: IChannel) => i.id === ownProps.id),
        isSelected: state.channelList.selectedChannelId === ownProps.id,
    };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IChannelOwnProps): IChannelDispatchProps => {
    return {
        showEditChannel: () => dispatch(showEditChannel(ownProps.id)),
        selectChannel: () => dispatch(selectChannel(ownProps.id)),
    };
};

export const ChannelContainer = connect<IChannelStateProps , IChannelDispatchProps, IChannelOwnProps>(mapStateToProps, mapDispatchToProps)(Channel);

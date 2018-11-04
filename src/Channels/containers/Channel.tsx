import {IState} from '../../common/IState';
import {Channel, IChannelDispatchProps, IChannelOwnProps, IChannelStateProps} from '../components/Channel';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {selectChannel, showEditChannel} from '../actions/actionCreators';

const mapStateToProps = (state: IState, ownProps: IChannelOwnProps): IChannelStateProps => {
    console.log("by id");
    console.log(state.channelList.channels.byId);
    console.log("props id");
    console.log(ownProps.id);
    return {
        channel: state.channelList.channels.byId.get(ownProps.id),
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

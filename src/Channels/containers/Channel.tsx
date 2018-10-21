import {IState} from '../../common/IState';
import {Channel, IChannelDispatchProps, IChannelOwnProps, IChannelStateProps} from '../components/Channel';
import {IChannel} from '../models/IChannel';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {showEditChannel} from '../actions/actionCreators';

const mapStateToProps = (state: IState, ownProps: IChannelOwnProps) => {
    return {
        channel: state.channelList.channels.find((i: IChannel) => i.id === ownProps.id),
    };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IChannelOwnProps) => {
    console.log("own props");
    console.log(ownProps);
    return {
        showEditChannel: () => dispatch(showEditChannel(ownProps.id))
    };
};

export const ChannelContainer = connect<IChannelStateProps , IChannelDispatchProps, IChannelOwnProps>(mapStateToProps, mapDispatchToProps)(Channel);

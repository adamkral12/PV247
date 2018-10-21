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

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        showEditChannel: (id: string) => dispatch(showEditChannel(id))
    };
};

export const ChannelContainer = connect<IChannelStateProps , IChannelDispatchProps, IChannelOwnProps>(mapStateToProps, mapDispatchToProps)(Channel);

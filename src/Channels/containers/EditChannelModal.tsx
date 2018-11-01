import {IState} from '../../common/IState';
import {
    EditChannelModal,
    IEditChannelModalDispatchProps,
    IEditChannelModalOwnProps,
    IEditChannelModalStateProps
} from '../components/EditChannelModal';
import {IChannel} from '../models/IChannel';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {addChannel, hideEditChannel, updateChannel} from '../actions/actionCreators';

const mapStateToProps = (state: IState, ownProps: IEditChannelModalOwnProps): IEditChannelModalStateProps => {
    return {
        channel: state.channelList.channels.find((i: IChannel) => i.id === ownProps.id),
        show: state.channelList.showEditModal,
        users: state.channelList.users,
    };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IEditChannelModalOwnProps): IEditChannelModalDispatchProps => {
    return {
        hideEditChannel: () => dispatch(hideEditChannel()),
        editChannel: (name: string, customData) => dispatch(updateChannel(ownProps.id, name, customData)),
        addChannel: (name: string, customData) => dispatch(addChannel(name, customData)),
    };
};

export const EditChannelModalContainer = connect<IEditChannelModalStateProps, IEditChannelModalDispatchProps, IEditChannelModalOwnProps>(mapStateToProps, mapDispatchToProps)(EditChannelModal);

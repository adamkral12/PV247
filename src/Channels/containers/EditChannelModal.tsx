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
import {hideEditChannel} from '../actions/actionCreators';

const mapStateToProps = (state: IState, ownProps: IEditChannelModalOwnProps): IEditChannelModalStateProps => {
    return {
        channel: state.channelList.channels.find((i: IChannel) => i.id === ownProps.id),
        show: state.channelList.showEditModal,
        users: state.channelList.users,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IEditChannelModalDispatchProps => {
    return {
        hideEditChannel: () => dispatch(hideEditChannel()),
        editChannel: () => dispatch(editChannel())
    };
};

export const EditChannelModalContainer = connect<IEditChannelModalStateProps, IEditChannelModalDispatchProps, IEditChannelModalOwnProps>(mapStateToProps, mapDispatchToProps)(EditChannelModal);

import {IState} from '../../common/IState';
import {
    EditChannelModal,
    IEditChannelModalDispatchProps,
    IEditChannelModalOwnProps,
    IEditChannelModalStateProps
} from '../components/EditChannelModal';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {addChannel, deleteChannel, hideEditChannel, updateChannel} from '../actions/actionCreators';
import * as Immutable from 'immutable';

const mapStateToProps = (state: IState, ownProps: IEditChannelModalOwnProps): IEditChannelModalStateProps => {
    return {
        channel: ownProps.id === null ? null : state.channelList.channels.byId.get(ownProps.id),
        show: state.channelList.editedChannelModal,
        users: Immutable.List(state.userApp.users.byId.toList()),
        crudErrorMessage: state.channelList.crudErrorMessage
    };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IEditChannelModalOwnProps): IEditChannelModalDispatchProps => {
    return {
        hideEditChannel: () => dispatch(hideEditChannel()),
        editChannel: (name: string, customData) => dispatch(updateChannel(ownProps.id || '', name, customData)),
        addChannel: (name: string, customData) => dispatch(addChannel(name, customData)),
        deleteChannel: () => dispatch(deleteChannel(ownProps.id)),
    };
};

export const EditChannelModalContainer = connect<IEditChannelModalStateProps, IEditChannelModalDispatchProps, IEditChannelModalOwnProps>
(
    mapStateToProps,
    mapDispatchToProps
)
(EditChannelModal);

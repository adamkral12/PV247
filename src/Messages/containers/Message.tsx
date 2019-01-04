import {IState} from '../../common/IState';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {cancelEditingMessage, deleteMessage, downvoteMessage, startEditingMessage, upvoteMessage} from '../actionCreators/actionCreators';
import {IPostDispatchProps, IPostOwnProps, IPostStateProps, Message} from '../components/Message';

const mapStateToProps = (state: IState, ownProps: IPostOwnProps): IPostStateProps => {
    const message = state.messageApp.messages.byId.get(ownProps.id);
    return {
        message,
        user: state.userApp.user,
        author: state.userApp.users.byId.get(message.createdBy),
        isBeingEdited: state.messageApp.editedMessageId === ownProps.id,
    };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IPostOwnProps): IPostDispatchProps => {
    return {
        delete: () => dispatch(deleteMessage(ownProps.id)),
        upvote: () =>  dispatch(upvoteMessage(ownProps.id)),
        downvote: () =>  dispatch(downvoteMessage(ownProps.id)),
        startEditing: () => dispatch(startEditingMessage(ownProps.id)),
        cancelEditing: () => dispatch(cancelEditingMessage(ownProps.id)),
    };
};
export const MessageContainer = connect<IPostStateProps, IPostDispatchProps, IPostOwnProps>(mapStateToProps, mapDispatchToProps)(Message);

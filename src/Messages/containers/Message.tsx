import {IState} from '../../common/IState';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {cancelEditingMessage, deleteMessage, downvoteMessage, editMessage, startEditingMessage, upvoteMessage} from '../actionCreators/actionCreators';
import {IPostDispatchProps, IPostOwnProps, IPostStateProps, Message} from '../components/Message';

const mapStateToProps = (state: IState, ownProps: IPostOwnProps): IPostStateProps => {
    return {
        message: state.messageApp.messages.byId.get(ownProps.id),
        user: state.userApp.user,
        isBeingEdited: state.messageApp.editedMessageId === ownProps.id,
    };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IPostOwnProps): IPostDispatchProps => {
    return {
        delete: () => dispatch(deleteMessage(ownProps.id)),
        upvote: () =>  dispatch(upvoteMessage(ownProps.id)),
        downvote: () =>  dispatch(downvoteMessage(ownProps.id)),
        edit: (text: string) => dispatch(editMessage(text, ownProps.id)),
        startEditing: () => dispatch(startEditingMessage(ownProps.id)),
        cancelEditing: () => dispatch(cancelEditingMessage(ownProps.id)),
    };
};
export const MessageContainer = connect<IPostStateProps, IPostDispatchProps, IPostOwnProps>(mapStateToProps, mapDispatchToProps)(Message);

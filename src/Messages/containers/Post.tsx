import {IState} from '../../common/IState';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {deleteMessage, downvoteMessage, upvoteMessage} from '../actionCreators/actionCreators';
import {IPostDispatchProps, IPostOwnProps, IPostStateProps, Post} from '../components/Post';

const mapStateToProps = (state: IState, ownProps: IPostOwnProps): IPostStateProps => {
    const message = state.messageApp.messages.byId.get(ownProps.id);
    return {
        message,
        user: state.userApp.users.byId.get((state.userApp.userEmail)),
        author: state.userApp.users.byId.get(message.createdBy)
    };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IPostOwnProps): IPostDispatchProps => {
    return {
        delete: () => dispatch(deleteMessage(ownProps.id)),
        upvote: () =>  dispatch(upvoteMessage(ownProps.id)),
        downvote: () =>  dispatch(downvoteMessage(ownProps.id))
    };
};
export const PostContainer = connect<IPostStateProps, IPostDispatchProps, IPostOwnProps>(mapStateToProps, mapDispatchToProps)(Post);

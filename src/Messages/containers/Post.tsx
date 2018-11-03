import {IState} from '../../common/IState';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {deleteMessage, downvoteMessage, upvoteMessage} from '../actionCreators/actionCreators';
import {IPostDispatchProps, IPostOwnProps, IPostStateProps, Post} from '../components/Post';

const mapStateToProps = (state: IState, ownProps: IPostOwnProps): IPostStateProps => {
    return {
        // @ts-ignore
        message: state.messageApp.messages.byId.get(ownProps.id),
        user: state.messageApp.user
    };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IPostOwnProps): IPostDispatchProps => {
    return {
        delete: () => dispatch(deleteMessage(ownProps.id)),
        onUpvote: () =>  dispatch(upvoteMessage(ownProps.id)),
        onDownvote: () =>  dispatch(downvoteMessage(ownProps.id))
    };
};
export const PostContainer = connect<IPostStateProps, IPostDispatchProps, IPostOwnProps>(mapStateToProps, mapDispatchToProps)(Post);

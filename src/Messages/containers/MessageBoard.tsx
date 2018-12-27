import {IState} from '../../common/IState';
import {IMessageBoardStateProps, MessageBoard} from '../components/MessageBoard';
import {connect} from 'react-redux';

const mapStateToProps = (state: IState): IMessageBoardStateProps => {
    return {
        messageIds: state.messageApp.messages.allIds,
        user: state.userApp.user,
        loadingErrorMessage: state.messageApp.loadingErrorMessage,
        crudErrorMessage: state.messageApp.crudErrorMessage,
        isLoading: state.messageApp.isLoading
    };
};


export const MessageBoardContainer = connect<IMessageBoardStateProps>(mapStateToProps)(MessageBoard);

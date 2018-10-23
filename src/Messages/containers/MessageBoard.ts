import {IState} from '../../common/IState';
import {IMessageBoardStateProps, MessageBoard} from '../components/MessageBoard';
import {connect} from 'react-redux';

const mapStateToProps = (state: IState): IMessageBoardStateProps => {
    return {
        messages: state.messageApp.messages,
        user: state.messageApp.user
    };
};

export const MessageBoardContainer = connect<IMessageBoardStateProps>(mapStateToProps)(MessageBoard);

import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {createMessage} from '../actionCreators/actionCreators';
import {IMessageFormDispatchProps, MessageForm} from '../components/MessageForm';

const mapDispatchToProps = (dispatch: Dispatch): IMessageFormDispatchProps => {
    return {
        createMessage: (message: string) => {
            dispatch(createMessage(message));
        }
    };
};

export const MessageFormContainer = connect<null, IMessageFormDispatchProps>(null, mapDispatchToProps)(MessageForm);

import {IState} from '../../common/IState';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {createMessage} from '../actionCreators/actionCreators';
import {IMessageFormDispatchProps, IMessageFormStateProps, MessageForm} from '../components/MessageForm';
import {IMessage} from '../model/IMessage';


const mapStateToProps = (state: IState): IMessageFormStateProps => {
    return {
        user: state.userApp.user,
        channelId: state.channelList.selectedChannelId
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IMessageFormDispatchProps => {
    return {
        createMessage: (message: IMessage) => {
            dispatch(createMessage(message));
        }
    };
};

export const MessageFormContainer = connect<IMessageFormStateProps, IMessageFormDispatchProps>(mapStateToProps, mapDispatchToProps)(MessageForm);

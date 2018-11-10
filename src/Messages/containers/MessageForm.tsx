import {IState} from '../../common/IState';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {createMessageStarted} from '../actionCreators/actionCreators';
import {IMessageFormDispatchProps, IMessageFormStateProps, MessageForm} from '../components/MessageForm';


const mapStateToProps = (state: IState): IMessageFormStateProps => {
    return {
        channelId: state.channelList.selectedChannelId
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IMessageFormDispatchProps => {
    return {
        createMessage: (channelId: Uuid, message: string) => {
            dispatch(createMessageStarted(channelId, message));
        }
    };
};

export const MessageFormContainer = connect<IMessageFormStateProps, IMessageFormDispatchProps>(mapStateToProps, mapDispatchToProps)(MessageForm);

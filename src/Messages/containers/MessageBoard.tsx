import * as Immutable from 'immutable';
import * as memoize from 'memoizee';
import {IState} from '../../common/IState';
import {IMessageBoardDispatchProps, IMessageBoardStateProps, MessageBoard} from '../components/MessageBoard';
import {connect} from 'react-redux';
import {IMessage} from '../model/IMessage';
import {Dispatch} from 'redux';
import {loadMessages} from '../actionCreators/loadMessages';

const getChannelsMessageIds = memoize((allIds: Immutable.List<Uuid>, byId: Immutable.Map<Uuid, IMessage>, selectedChannelId): Immutable.List<Uuid> => {
    return allIds.filter((id: Uuid) => byId.get(id).channelId === selectedChannelId).toList();
    });

const mapStateToProps = (state: IState): IMessageBoardStateProps => {
    return {
        messageIds: getChannelsMessageIds(state.messageApp.messages.allIds, state.messageApp.messages.byId, state.channelList.selectedChannelId),
        user: state.userApp.users.byId.get('email'),
        loadingErrorMessage: state.messageApp.loadingErrorMessage,
        crudErrorMessage: state.messageApp.crudErrorMessage,
        isLoading: state.messageApp.isLoading
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IMessageBoardDispatchProps => {
    return {
        loadMessages: () => dispatch(loadMessages()),
    };
};


export const MessageBoardContainer = connect<IMessageBoardStateProps, IMessageBoardDispatchProps>(mapStateToProps, mapDispatchToProps)(MessageBoard);

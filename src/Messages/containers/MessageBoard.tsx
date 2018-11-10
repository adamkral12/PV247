import * as Immutable from 'immutable';
import * as memoize from 'memoizee';
import {IState} from '../../common/IState';
import {IMessageBoardStateProps, MessageBoard} from '../components/MessageBoard';
import {connect} from 'react-redux';
import {IMessage} from '../model/IMessage';

const getChannelsMessageIds = memoize((allIds: Immutable.List<Uuid>, byId: Immutable.Map<Uuid, IMessage>, selectedChannelId): Immutable.List<Uuid> => {
    return allIds.filter((id: Uuid) => byId.get(id).channelId === selectedChannelId).toList();
    });

const mapStateToProps = (state: IState): IMessageBoardStateProps => {
    return {
        messageIds: getChannelsMessageIds(state.messageApp.messages.allIds, state.messageApp.messages.byId, state.channelList.selectedChannelId),
        user: state.userApp.user
    };
};


export const MessageBoardContainer = connect<IMessageBoardStateProps>(mapStateToProps)(MessageBoard);

import * as React from 'react';
import './MessageBoard.css';
import {IUser} from '../../Channels/models/IUser';
import * as Immutable from 'immutable';
import {MessageContainer} from '../containers/Message';
import {MessageFormContainer} from '../containers/MessageForm';

export interface IMessageBoardStateProps {
    readonly messageIds: Immutable.List<Uuid>;
    readonly user: IUser;
}

export interface IMessageBoardDispatchProps {
    readonly loadMessages: () => void;
}


export class MessageBoard extends React.PureComponent<IMessageBoardStateProps & IMessageBoardDispatchProps> {
    componentDidMount() {
        this.props.loadMessages();
    }
    render() {
        return (
            <div>
                <div className="postWrapper">
                    {this.props.messageIds.map((id: Uuid, index: number) => (
                        <MessageContainer
                            key={id}
                            id={id}
                            index={index + 1}
                        />
                    ))
                    }
                </div>
                <MessageFormContainer/>
            </div>
    );
  }
}


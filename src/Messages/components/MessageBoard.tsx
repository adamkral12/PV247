import * as React from 'react';
import './MessageBoard.css';
import {IUser} from '../../Channels/models/IUser';
import * as Immutable from 'immutable';
import {PostContainer} from '../containers/Post';
import {MessageFormContainer} from '../containers/MessageForm';

export interface IMessageBoardStateProps {
    readonly messageIds: Immutable.List<Uuid>;
    readonly user: IUser;
}

export class MessageBoard extends React.PureComponent<IMessageBoardStateProps> {
    render() {
        return (
            <div>
                <div className="postWrapper">
                    {this.props.messageIds.map((id: Uuid, index: number) => (
                        <PostContainer
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


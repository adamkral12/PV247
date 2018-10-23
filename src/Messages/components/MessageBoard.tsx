import * as React from 'react';
import { Post } from './Post';
// import MessageForm from "./MessageForm";
import './MessageBoard.css';
import {IMessage} from '../model/IMessage';
import {IUser} from '../../Channels/models/IUser';
import * as Immutable from 'immutable';
// import {MessageForm} from '../../Screen/Body/MessageForm';

export interface IMessageBoardStateProps {
    readonly messages: Immutable.List<IMessage>;
    readonly user: IUser;
}
//
// export interface IMessageBoardDispatchProps {
//
// }
export class MessageBoard extends React.PureComponent<IMessageBoardStateProps> {
  render() {
    return (
            <div>
                <div className="postWrapper">
                    {this.props.messages.map((message: IMessage) => {
                      return (
                            <Post
                              user={this.props.user}
                              key={message.id}
                              message={message}
                            />
                      );
                    })}
                </div>
                {/*<MessageForm/>*/}
            </div>
    );
  }
}

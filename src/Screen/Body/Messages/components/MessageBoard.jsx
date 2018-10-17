import * as React from 'react';
import * as Immutable from 'immutable';
// import Post from "./Post";
// import MessageForm from "./MessageForm";
import './MessageBoard.css';


// export interface IMessageBoardStateProps {
//     readonly messages: Immutable.List<string>
// }
//
// export interface IMessageBoardDispatchProps {
//
// }
export default class MessageBoard extends React.Component {
  render() {
    return (
            <div>
                {/*<div className="postWrapper">*/}
                    {/*{this.props.messages.map((message) => {*/}
                      {/*return (*/}
                            {/*<Post*/}
                              {/*user={this.props.user}*/}
                              {/*key={message.id}*/}
                              {/*messageValue={message.value}*/}
                              {/*messageId={message.id}*/}
                              {/*customData={message.customData}*/}
                            {/*/>*/}
                      {/*);*/}
                    {/*})}*/}
                {/*</div>*/}
                {/*<MessageForm/>*/}
            </div>
    );
  }
}

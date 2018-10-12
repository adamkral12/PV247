import React, { Component } from 'react';
import Post from "./Post";
import MessageForm from "./MessageForm";
import PropTypes from 'prop-types';
import './MessageBoard.css';

export default class MessageBoard extends Component {
    render() {
        return (
            <div>
                <div className="postWrapper">
                    {this.props.messages.map((message) => {
                        return <Post
                            key={message.id}
                            messageValue={message.value}
                            messageId={message.id}
                            customData={message.customData}
                        />
                    })}
                </div>
                <MessageForm/>
            </div>
        );
    }
}

MessageBoard.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            createdBy: PropTypes.string.isRequired,
            updatedAt: PropTypes.string.isRequired,
            updatedBy: PropTypes.string.isRequired,
            customData: PropTypes.object.isRequired
        }).isRequired
    ).isRequired
};

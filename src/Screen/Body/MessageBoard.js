import React, { Component } from 'react';
import Post from "./Post";
import MessageForm from "./MessageForm";

export default class MessageBoard extends Component {
    render() {
        return (
            <div>
                <Post/>
                <Post/>
                <Post/>
                <MessageForm/>
            </div>
        );
    }
}
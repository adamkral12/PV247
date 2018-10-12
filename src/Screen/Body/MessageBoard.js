import React, { Component } from 'react';
import Post from "./Post";
import MessageForm from "./MessageForm";
import ChannelNavbar from "./ChannelNavbar";

export default class MessageBoard extends Component {
    render() {
        return (
            <div>
                <ChannelNavbar/>
                <Post/>
                <Post/>
                <Post/>
                <MessageForm/>
            </div>
        );
    }
}
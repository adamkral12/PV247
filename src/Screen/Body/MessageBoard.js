import React, { Component } from 'react';
import Post from "./Post";

export default class MessageBoard extends Component {
    render() {
        return (
            <div>
                <Post/>
                <Post/>
                <Post/>
            </div>
        );
    }
}
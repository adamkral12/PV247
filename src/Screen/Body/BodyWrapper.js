import React, { Component } from 'react';
import MessageBoard from "./MessageBoard";

export default class BodyWrapper extends Component {
    render() {
        return (
            <div>
                <MessageBoard/>
            </div>
        );
    }
}

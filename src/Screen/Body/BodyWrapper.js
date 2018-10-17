import React, { Component } from 'react';
import MessageBoard from "./MessageBoard";
import PropTypes from 'prop-types';

export default class BodyWrapper extends Component {
    render() {
        return (
            <div>
                <MessageBoard
                    user={this.props.user}
                    messages={this.props.messages}
                />
            </div>
        );
    }
}

BodyWrapper.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        customData: PropTypes.shape({
            profilePicture: PropTypes.string.isRequired,
            displayName: PropTypes.string.isRequired
        }).isRequired,
    }).isRequired,
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

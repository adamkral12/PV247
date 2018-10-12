import React, { Component } from 'react';
import HeaderWrapper from "./Header/HeaderWrapper";
import BodyWrapper from "./Body/BodyWrapper";
import PropTypes from 'prop-types';

export default class Screen extends Component {
    render() {
        return (
            <div>
                <BodyWrapper
                    messages={this.props.messages}
                />
            </div>
        );
    }
}

Screen.propTypes = {
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

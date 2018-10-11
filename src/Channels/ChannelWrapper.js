import React, { Component } from 'react';
import ChannelSection from "./ChannelSection";
import PropTypes from 'prop-types';
import {Panel} from "react-bootstrap";

export default class ChannelWrapper extends Component {

    render() {
        return(
            <div>
            <Panel>
                <Panel.Heading>Panel heading</Panel.Heading>
                <ChannelSection
                    title="Channels"
                    channels={this.props.channels}
                    onChannelClick={this.props.onChannelClick}
                />
                <Panel.Body>Some more panel content here.</Panel.Body>
            </Panel>
            </div>
        );
    }
}

ChannelWrapper.propTypes = {
    onChannelClick: PropTypes.func.isRequired,
    channels: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            customData: PropTypes.object.isRequired
        }).isRequired
    ).isRequired
};

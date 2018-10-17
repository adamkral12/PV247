import React, { Component } from 'react';
import ChannelSection from "./ChannelSection";
import PropTypes from 'prop-types';
import {Panel, Col, Button} from "react-bootstrap";
import './ChannelWrapper.css';

export default class ChannelWrapper extends Component {

    render() {
        return(
            <Col xs={2} className="channel-wrapper">
                <Panel className="dark-back">
                    <Panel.Body className="dark-back">
                        <ChannelSection
                            className="dark-back"
                            title="Channels"
                            channels={this.props.channels}
                            onChannelClick={this.props.onChannelClick}
                        />
                        <Button>New Channel</Button>
                    </Panel.Body>
                </Panel>
            </Col>
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

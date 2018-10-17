import React, { Component } from 'react';
import ChannelSection from "./ChannelSection";
import PropTypes from 'prop-types';
import {Panel, Col, Button} from "react-bootstrap";
import './ChannelWrapper.css';
import NewChannelModal from "./NewChannelModal";

export default class ChannelWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showNewChannelModal: false
        };
    }

    showNewChannelModal = () => {
        this.setState({ showNewChannelModal: true })
    };

    hideNewChannelModal = () => {
        this.setState({ showNewChannelModal: false })
    };

    createChannel = (value) => {
        this.setState({ showNewChannelModal: false })
        //TODO create channel
        console.log("Channel created." + value)
    }

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
                        <Button onClick={this.showNewChannelModal}
                        >New Channel</Button>
                        <NewChannelModal show={this.state.showNewChannelModal}
                                         onClose={this.hideNewChannelModal}
                                         onCreateChannel={this.createChannel}//TODO handle Creation
                        />
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

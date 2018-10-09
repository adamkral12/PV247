import React, { Component } from 'react';
import ChannelSection from "./ChannelSection";
import PropTypes from 'prop-types';
import {ListGroup, ListGroupItem, Panel} from "react-bootstrap";

export default class ChannelWrapper extends Component {
    render() {
        return(
            <div>
            <Panel>
                <Panel.Heading>Panel heading</Panel.Heading>
                <ChannelSection
                    title="Channels"
                    channels={this.props.data}
                />
                <Panel.Body>Some more panel content here.</Panel.Body>
            </Panel>
            </div>
        );
    }
}

ChannelWrapper.propTypes = {
    channels: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.number,
            customData: PropTypes.object
        })
    )
};

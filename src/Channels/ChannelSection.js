import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Channel from "./Channel";
import {ListGroup, ListGroupItem, Panel} from "react-bootstrap";

export default class ChannelSection extends Component {

    onClick = (channelId) => {
        console.log("called onClick in ChannelSection, calling props on Click")
        this.props.onChannelClick(channelId);
    };

    render() {
        return(
            <div>
                <Panel.Body>{this.props.title}</Panel.Body>
                <ListGroup>
                    {this.props.channels.map((channel) => {
                        return (
                            <ListGroupItem
                                key={channel.id}
                            >
                                <Channel
                                    id={channel.id}
                                    name={channel.name}
                                    onClick={this.onClick}
                                />
                            </ListGroupItem>
                        );
                    })}
                </ListGroup>
            </div>
        );
    }
}

ChannelSection.propTypes = {
    title: PropTypes.string.isRequired,
    onChannelClick: PropTypes.func.isRequired,
    channels: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            customData: PropTypes.object.isRequired,
        })
    ).isRequired
};

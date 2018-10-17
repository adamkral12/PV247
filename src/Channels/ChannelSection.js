import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Channel from "./Channel";
import {ListGroup, ListGroupItem, Panel} from "react-bootstrap";
import './ChannelSection.css';

export default class ChannelSection extends Component {

    onClick = (channelId) => {
        console.log("called onClick in ChannelSection, calling props on Click")
        this.props.onChannelClick(channelId);
    };

    render() {
        return(
            <div>
                <Panel.Body>
                    <ListGroup>
                        {this.props.channels.map((channel) => {
                            return (
                                <ListGroupItem
                                    key={channel.id}
                                    className="dark-back channel-header"
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
                </Panel.Body>
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

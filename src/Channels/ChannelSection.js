import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Channel from "./Channel";
import {ListGroup, ListGroupItem, Panel} from "react-bootstrap";

export default class ChannelSection extends Component {
    render() {
        console.log(this.props.channels);
        return(
            <div>
                <Panel.Body>{this.props.title}</Panel.Body>
                <ListGroup>
                    {this.props.channels.map((channel) => {
                        return (
                            <ListGroupItem>
                                <Channel
                                    key={channel.id}
                                    id={channel.id}
                                    name={channel.name}
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
    title: PropTypes.string,
    channels: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.string,
            customData: PropTypes.object
        })
    )
};

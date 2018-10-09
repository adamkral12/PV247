import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Channel from "./Channel";

export default class ChannelSection extends Component {
    render() {
        console.log(this.props.channels);
        return(
            <div>
                <div className="channel-title">
                    {this.props.title}
                </div>
                <div className="channels">
                    {this.props.channels.map((channel) => {
                        return (
                            <Channel
                                key={channel.id}
                                id={ channel.id }
                                name={ channel.name }
                            />
                        );
                    })}
                </div>
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

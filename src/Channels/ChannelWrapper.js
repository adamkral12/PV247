import React, { Component } from 'react';
import ChannelSection from "./ChannelSection";
import PropTypes from 'prop-types';

export default class ChannelWrapper extends Component {
    render() {
        return(
            <div>
                <ChannelSection
                    title="Channels"
                    channels={this.props.data}
                />
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

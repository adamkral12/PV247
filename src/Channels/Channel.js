import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Channel extends Component {

    // todo: this change will be propagated and change the main screen
    onclick = () => {
        console.log("on click in channel, calling props onClick");
        this.props.onClick(this.props.id);
    };

    render() {
        return (
            <div>
                <div className="channel-name"
                     onClick={this.onclick}
                >
                    {this.props.name}
                </div>
            </div>
        );
    }
}


Channel.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};


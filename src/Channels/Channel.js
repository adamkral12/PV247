import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Channel extends Component {

    // todo: this change will be propagated and change the main screen
    onclick = () => {
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
    name: PropTypes.string,
    id: PropTypes.string
};


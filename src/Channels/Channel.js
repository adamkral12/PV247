import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon } from 'react-bootstrap';
import DeleteChannelModal from "./DeleteChannelModal";

export default class Channel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDeleteChannelModal: false
        };
    }

    // todo: this change will be propagated and change the main screen
    onclick = () => {
        console.log("on click in channel, calling props onClick");
        this.props.onClick(this.props.id);
    };

    showDeleteChannelModal = () => {
        this.setState({ showDeleteChannelModal: true })
    };

    hideDeleteChannelModal = () => {
        this.setState({ showDeleteChannelModal: false })
    };

    deleteChannel = () => {
        this.setState({ showDeleteChannelModal: false })
        // TODO:  delete channel (this.props.id)
    };

    render() {
        return (
            <div>
                <div className="channel-name"
                     onClick={this.onclick}
                >
                    {this.props.name}
                </div>
                <Button bsStyle="danger"
                        onClick={this.showDeleteChannelModal}
                >
                    <Glyphicon glyph="remove"/>
                </Button>
                <DeleteChannelModal
                    channelName={this.props.name}
                    channelId={this.props.id}
                    show={this.state.showDeleteChannelModal}
                    onClose={this.hideDeleteChannelModal}
                    onDelete={this.deleteChannel}
                />
            </div>
        );
    }
}


Channel.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};


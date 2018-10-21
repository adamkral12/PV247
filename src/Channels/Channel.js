import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup, Glyphicon, OverlayTrigger, Tooltip} from 'react-bootstrap';
import DeleteChannelModal from "./DeleteChannelModal";
import EditChannelModal from "./EditChannelModal";
import InviteMemberModal from "./InviteMemberModal";

export default class Channel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDeleteChannelModal: false,
            showEditChannelModal: false,
            showInviteMemberModal: false
        };
    }

    // todo: this change will be propagated and change the main screen
    onclick = () => {
        console.log("on click in channel, calling props onClick");
        this.props.onClick(this.props.id);
    };

    showDeleteChannelModal = () => {
        this.setState({showDeleteChannelModal: true})
    };

    hideDeleteChannelModal = () => {
        this.setState({showDeleteChannelModal: false})
    };

    deleteChannel = () => {
        this.setState({showDeleteChannelModal: false})
        // TODO:  delete channel (this.props.id)
    };

    showEditChannelModal = () => {
        this.setState({
            showEditChannelModal: true
        });
    };

    hideEditChannelModal = () => {
        this.setState({
            showEditChannelModal: false
        });
    };

    showInviteMemberModal = () => {
        this.setState({
            showInviteMemberModal: true
        });
    };

    hideInviteMemberModal = () => {
        this.setState({
            showInviteMemberModal: false
        });
    };


    render() {
        const deleteChannelTooltip = (
            <Tooltip id="Delete channel">
                Delete channel
            </Tooltip>
        );
        const editNameTooltip = (
            <Tooltip id="Edit channel name">
                Edit channel name
            </Tooltip>
        );
        const inviteMembersTooltip = (
            <Tooltip id="Invite members">
                Invite members
            </Tooltip>
        );
        return (
            <div className="text-center">

                <div className="channel-name"
                     onClick={this.onclick}
                >
                    {this.props.name}
                </div>
                <ButtonGroup>
                    <OverlayTrigger placement="bottom" overlay={deleteChannelTooltip}>
                        <Button bsStyle="danger"
                                onClick={this.showDeleteChannelModal}
                        >

                            <Glyphicon glyph="remove"/>
                        </Button>
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" overlay={editNameTooltip}>

                        <Button bsStyle="danger"
                                onClick={this.showEditChannelModal}
                        >
                            <Glyphicon glyph="edit"/>
                        </Button>
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" overlay={inviteMembersTooltip}>

                        <Button bsStyle="danger"
                                onClick={this.showInviteMemberModal}
                        >
                            <Glyphicon glyph="user"/>
                        </Button>
                    </OverlayTrigger>
                </ButtonGroup>
                <DeleteChannelModal
                    channelName={this.props.name}
                    channelId={this.props.id}
                    show={this.state.showDeleteChannelModal}
                    onClose={this.hideDeleteChannelModal}
                    onDelete={this.deleteChannel}
                />
                <EditChannelModal
                    value={this.props.name}
                    channelId={this.props.id}
                    show={this.state.showEditChannelModal}
                    onEdit={this.hideEditChannelModal} //TODO: handle edit
                    onClose={this.hideEditChannelModal}
                />
                <InviteMemberModal
                    users={this.props.users}
                    channelId={this.props.id}
                    show={this.state.showInviteMemberModal}
                    onClose={this.hideInviteMemberModal}
                />

            </div>
        );
    }
}

/*
<div className="text-center">
 */

Channel.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};


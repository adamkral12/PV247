import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup, Col, Glyphicon, Image, Label, OverlayTrigger, Tooltip} from 'react-bootstrap';
import DeleteChannelModal from "./DeleteChannelModal";
import EditChannelModal from "./EditChannelModal";
import InviteMemberModal from "./InviteMemberModal";

export default class Member extends Component {

    render() {

        return (
            <div >
                <Col xs={3} className="vertAlCenter">
                    <Image
                        src={this.props.user.customData.profilePicture}
                        className="image"
                    >
                    </Image>
                </Col>
                <Col xs={5} className="vertAlCenter text-center">
                    <h1>{this.props.user.customData.displayName}</h1>
                </Col>
                <Col xs={5} className="vertAlCenter">
                    <Button>Invite</Button>
                </Col>
            </div>
        );
    }
}



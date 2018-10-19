import React, { Component } from 'react';
import {Glyphicon, MenuItem, Nav, Navbar, NavDropdown, NavItem, Col} from "react-bootstrap";
import './HeaderWrapper.css';
import EditUserModal from "../../Users/EditUserModal";
import PropTypes from 'prop-types';
import EditChannelModal from "../../Channels/EditChannelModal";
import InviteMemberModal from "../../Channels/InviteMemberModal";

export default class HeaderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditUserModal: false,
            showNewChannelModal: false,
            showInviteMemberModal: false
        };
    }

    showEditUserModal = () => {
        this.setState({
            showEditUserModal: true
        });
    };

    hideEditUserModal = () => {
        this.setState({
            showEditUserModal: false
        });
    };

    render() {
        return (
            <Navbar fluid className="navbar-wrapper">
                <Col xs={4} sm={2} className="company-header">
                    <Navbar.Header>
                            <Navbar.Brand className="nav-brand">
                                <a href="#home">PV247</a>
                            </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Col>
                <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Channel name
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Members
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={1.1}
                                  onClick={this.showEditChannelModal}
                        >Change name</MenuItem>
                        <MenuItem eventKey={1.2}
                                  onClick={this.showInviteMemberModal}
                        >Invite member</MenuItem>

                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1}
                             onClick={this.showEditUserModal}
                    >
                            <Glyphicon glyph="user"/>
                    </NavItem>
                </Nav>
                </Navbar.Collapse>
                <EditUserModal
                    user={this.props.user}
                    show={this.state.showEditUserModal}
                    onEdit={this.hideEditUserModal} //TODO: handle edit
                    onClose={this.hideEditUserModal}
                />
            </Navbar>
        );
    }
}
HeaderWrapper.propTypes = {
  user: PropTypes.object.isRequired
};

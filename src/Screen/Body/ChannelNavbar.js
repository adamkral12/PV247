import React, { Component } from 'react';
import {MenuItem, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default class ChannelNavbar extends Component {
    render() {
        return (
                <Navbar collapseOnSelect fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand">ChannelName</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavDropdown eventKey={1} title="Dropdown" id="basic-nav-dropdown"
                            >
                                <MenuItem eventKey={1.1}>Change name</MenuItem>
                                <MenuItem eventKey={1.2}>Invite member</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={1.3}>Delete</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>);
    }
}
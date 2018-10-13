import React, { Component } from 'react';
import {Glyphicon, MenuItem, Nav, Navbar, NavDropdown, NavItem, Col} from "react-bootstrap";
import './HeaderWrapper.css';

export default class HeaderWrapper extends Component {
    render() {
        return (
            <Navbar fluid className="navbar-wrapper">
                <Col xs={2} className="company-header">
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
                        <MenuItem eventKey={1.1}>Change name</MenuItem>
                        <MenuItem eventKey={1.2}>Invite member</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={1.3}>Delete</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavDropdown eventKey={1}
                                 title={
                                     <div style={{ display: 'inline-block' }}>
                                         <Glyphicon glyph="user" />
                                     </div>
                                 }
                                 id="basic-nav-dropdown"
                    >
                        <MenuItem eventKey={1.1}>Profile</MenuItem>
                        <MenuItem eventKey={1.2}>Logout</MenuItem>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

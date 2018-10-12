import React, { Component } from 'react';
import {Glyphicon, MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";

export default class HeaderWrapper extends Component {
    render() {
        return (
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
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

import * as React from 'react';
import {
  Glyphicon, MenuItem, Nav, Navbar, NavDropdown, NavItem, Col
} from 'react-bootstrap';
import './Header.less';
import {PureComponent} from 'react';
import {ChannelNameContainer} from '../containers/ChannelName';
import {EditUserModalContainer} from '../../Users/containers/EditUserModal';

export interface HeaderDispatchProps {
    readonly showEditUserModal: () => void;
}

export class Header extends PureComponent<HeaderDispatchProps> {
    render() {
        const {showEditUserModal} = this.props;
        return (
            <Col xs={12} sm={9} md={9}>
                <Navbar fluid className="navbar-wrapper">
                    <Navbar.Header>
                        <Navbar.Brand className="nav-brand">
                            <a href="#home">PV247</a>
                        </Navbar.Brand>
                        <ChannelNameContainer/>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
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
                            <NavItem
                                eventKey={1}
                                onClick={showEditUserModal}
                            >
                                <Glyphicon glyph="user"/>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                    <EditUserModalContainer/>
                </Navbar>
            </Col>
        );
    }
}
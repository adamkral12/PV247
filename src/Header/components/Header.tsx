import * as React from 'react';
import {
  Glyphicon, Nav, Navbar, NavItem, NavDropdown, MenuItem, Col
} from 'react-bootstrap';
import './Header.less';
import {PureComponent} from 'react';
import {ChannelNameContainer} from '../containers/ChannelName';
import {EditUserModalContainer} from '../../Users/containers/EditUserModal';
import {ChannelPictureContainer} from '../containers/ChannelPicture';
import {ToggleChannelListContainer} from '../../Channels/containers/ToggleChannelList';
import {Badge} from 'react-bootstrap';

export interface HeaderStateProps {
    readonly numberOfMembers: number | undefined;
}

export interface HeaderDispatchProps {
    readonly showEditUserModal: () => void;
    readonly logout: () => void;
}

export class Header extends PureComponent<HeaderDispatchProps & HeaderStateProps> {
    render() {
        const {showEditUserModal, logout} = this.props;
        return (
            <Col xs={12} sm={9} md={9} className="header-wrapper">
                <Navbar fluid className="navbar-wrapper">
                    <Navbar.Header>
                        <ToggleChannelListContainer/>
                        <ChannelPictureContainer/>
                        <ChannelNameContainer/>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            {this.props.numberOfMembers &&<NavItem eventKey={2} href="#">
                                Members <Badge>{this.props.numberOfMembers}</Badge>
                            </NavItem>}
                        </Nav>
                        <Nav pullRight>
                            <NavDropdown eventKey={1} title={<Glyphicon glyph="user"/>} id="dropdown">
                                <MenuItem eventKey={1.1} onClick={showEditUserModal}>Profile management</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={1.2} onClick={logout}>Logout</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <EditUserModalContainer/>
                </Navbar>
            </Col>
        );
    }
}

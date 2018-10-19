import * as React from 'react';
import {
  Glyphicon, MenuItem, Nav, Navbar, NavDropdown, NavItem, Col
} from 'react-bootstrap';
import './HeaderWrapper.css';
import {EditUserModal} from '../../Users/EditUserModal';
import {PureComponent} from 'react';

export class HeaderWrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showEditUserModal: false
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
                    <NavItem
                      eventKey={1}
                      onClick={this.showEditUserModal}
                    >
                            <Glyphicon glyph="user"/>
                    </NavItem>
                </Nav>
                </Navbar.Collapse>
                <EditUserModal/>
            </Navbar>
      );
    }
}

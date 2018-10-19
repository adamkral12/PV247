import React, { Component } from 'react';
import {
    Modal,
    Button
} from 'react-bootstrap';

import PropTypes from 'prop-types';
import Member from "./Member";
export default class InviteMemberModal extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit channel name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                            {this.props.users.map((user) => {
                                return (
                                        <Member user = {user}/>
                                    );
                            })}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
/*
{this.props.users.map((user) => {
                                return (

                                    <Row>

                                    <Col xs={4}>
                                    <Image
                                        className="image"
                                        src={user.customData.profilePicture}
                                        circle
                                    />
                                    </Col>
                                        <Col xs={4}>
                                    <Label>{user.customData.name}
                                    </Label>
                                        </Col>
                                        <Col xs={4}>
                                        <Button
                                            onClick={this.props.inviteMember}
                                        >Invite</Button>
                                        </Col>
                                    </Row>

                                );
                            })}
                    </Modal.Body>
 */
/*
<ListGroup>
                            {this.props.users.map((user) => {
                                return (
                                    <ListGroupItem
                                        key={user.id}
                                        className="dark-back channel-header"
                                    >
                                        <Label>{user.customData.displayName}</Label>
                                        <Button
                                            onClick={this.props.inviteMember}
                                        >Invite</Button>
                                    </ListGroupItem>
                                );
                            })}
                        </ListGroup>*/
/*
return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit channel name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table responsive>
                            <tbody>
                            {this.props.users.map((user) => {
                                return (
                                        <tr>
                                            <Col xs={2}>
                                            <td>
                                                <Image
                                                    src={user.customData.profilePicture}
                                                    className="image"
                                                >
                                                </Image>
                                            </td>
                                            </Col>
                                            <Col xs={4}>
                                                <div className="text-center">
                                            <td>{user.customData.displayName}</td>
                                                </div>
                                            </Col>
                                                <Col xs={4}>

                                                <td><Button>Invite</Button></td>
                                                </Col>
                                        </tr>
                                )
                            })}
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
 */
InviteMemberModal.propTypes = {
    users:PropTypes.arrayOf(
        PropTypes.shape({
                email: PropTypes.string.isRequired,
                customData: PropTypes.shape({
                    profilePicture: PropTypes.string.isRequired,
                    displayName: PropTypes.string.isRequired
                }).isRequired,
            }).isRequired),
    show: PropTypes.bool.isRequired,
    onEdit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

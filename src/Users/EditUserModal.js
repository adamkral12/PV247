import React, { Component } from 'react';
import { Modal, Button, FormControl, Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class EditUserModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: this.props.user.customData.displayName,
            profilePicture: this.props.user.customData.profilePicture
        };
    }

    onEdit = () => {
        this.props.onEdit(this.state);
    };

    handleNameChange = (event) => {
        console.log(event);
        this.setState({ displayName: event})
    };

    handleProfilePictureChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                profilePicture: reader.result
            });
        };

        reader.readAsDataURL(file)
    };

    render() {
        let {profilePicture} = this.state;
        let $imagePreview = null;
        if (profilePicture) {
            $imagePreview = (<Image src={profilePicture} circle responsive/>);
        }

        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit user {this.props.user.email}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Col xs={6}>
                            <FormControl
                                type="file"
                                onChange={this.handleProfilePictureChange}
                            />
                        </Col>
                        <Col xs={6}>
                            {$imagePreview}
                        </Col>
                        <FormControl
                            type="text"
                            value={this.state.displayName}
                            placeholder="Enter displayed name"
                            onChange={this.handleNameChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={this.onEdit}>Edit</Button>
                        <Button onClick={this.props.onClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

EditUserModal.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        customData: PropTypes.shape({
            profilePicture: PropTypes.string.isRequired,
            displayName: PropTypes.string.isRequired
        }).isRequired,
    }).isRequired,
    show: PropTypes.bool.isRequired,
    onEdit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

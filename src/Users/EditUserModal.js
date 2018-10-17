import React, { Component } from 'react';
import {
  Modal, Button, FormControl, Col, Image
} from 'react-bootstrap';

export default class EditUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "dispaly",
      profilePicture: "profile"
    };
  }

    onEdit = () => {
      this.props.onEdit(this.state);
    };

    handleNameChange = (event) => {
      console.log(event);
      this.setState({ displayName: event });
    };

    handleProfilePictureChange = (e) => {
      e.preventDefault();

      const reader = new FileReader();
      const file = e.target.files[0];

      reader.onloadend = () => {
        this.setState({
          file,
          profilePicture: reader.result
        });
      };

      reader.readAsDataURL(file);
    };

    render() {
      const { profilePicture } = this.state;
      let $imagePreview = null;
      if (profilePicture) {
        $imagePreview = (<Image src={profilePicture} circle responsive/>);
      }

      return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                          Edit user
                          mail
                        </Modal.Title>
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

import * as React from 'react';
import {
  Modal, Button, FormControl, Col
} from 'react-bootstrap';

export class EditUserModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayName: 'dispaly',
      profilePicture: 'profile'
    };
  }

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
      return (
            <div>
                <Modal>
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
                            {/*{$imagePreview}*/}
                        </Col>
                        <FormControl
                          type="text"
                          // value={this.state.displayName}
                          placeholder="Enter displayed name"
                          onChange={this.handleNameChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button>Edit</Button>
                        <Button>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
      );
    }
}

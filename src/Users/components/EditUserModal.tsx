import * as React from 'react';
import {
  Modal, Button, FormControl, Col, Image
} from 'react-bootstrap';
import {IUser} from '../../Channels/models/IUser';

export interface EditUserModalStateProps {
    readonly user: IUser;
    readonly show: boolean;
}

export interface EditUserModalDispatchProps {
    readonly hideEditUserModal: () => void;
}

export class EditUserModal extends React.PureComponent<EditUserModalStateProps & EditUserModalDispatchProps> {
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
        const {show, user, hideEditUserModal} = this.props;
        return (
            <div>
                <Modal show={show}>
                    <Modal.Header onHide={hideEditUserModal}>
                        <Modal.Title>
                          Edit user
                            {user.email}
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
                            {user.customData.profilePicture && <Image src={user.customData.profilePicture} circle responsive/>}
                        </Col>
                        <FormControl
                          type="text"
                          value={user.customData.displayName}
                          placeholder="Enter displayed name"
                          onChange={this.handleNameChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button>Edit</Button>
                        <Button onClick={hideEditUserModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
      );
    }
}

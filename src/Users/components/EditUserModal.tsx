import * as React from 'react';
import {
  Modal, Button, FormControl, Col, Image
} from 'react-bootstrap';
import {IUser} from '../../Channels/models/IUser';
import * as Immutable from 'immutable';

export interface EditUserModalStateProps {
    readonly user: IUser;
    readonly show: boolean;
    //displayName : string;
    //profilePicture: string;
}

export interface EditUserModalDispatchProps {
    readonly hideEditUserModal: () => void;
    readonly editUser: (profilePicture, displayName) => void;
}

export class EditUserModal extends React.Component<EditUserModalStateProps & EditUserModalDispatchProps> {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      show: false
    };
  }

    handleNameChange = (event) => {
      console.log(event);
        alert("handle");
        //this.setState(_ => ({ displayName: event }));
        let newUser = Immutable.fromJS(this.props.user)
        alert("Im");

        //ERROR
        newUser.customData.displayName = event.target.value;
        alert("newUser");
        this.setState(_ => ({ user: newUser}));
        //his.props.user.customData.displayName = event.target.value;
        alert("changedState");


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
        const {show, user, hideEditUserModal, editUser} = this.props;
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
                            {this.props.user.customData.profilePicture && <Image src={this.props.user.customData.profilePicture} circle responsive/>}
                        </Col>
                        <FormControl
                          type="text"
                          value={this.props.user.customData.displayName}
                          placeholder="Enter displayed name"
                          onChange={this.handleNameChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={editUser}>Edit</Button>
                        <Button onClick={hideEditUserModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
      );
    }
}

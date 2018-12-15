import * as React from 'react';
import {
    Modal, Button, FormControl, Col, Image, Alert
} from 'react-bootstrap';
import {IUser} from '../../Channels/models/IUser';
import {ScaleLoader} from 'react-spinners';

export interface EditUserModalStateProps {
    readonly user: IUser;
    readonly show: boolean;
    readonly apiResponseErrorMessage?: string;
    readonly isLoading: boolean;
}

export interface EditUserModalDispatchProps {
    readonly hideEditUserModal: () => void;
    readonly editUser: (profilePicture: File | null, displayName: string) => void;
    readonly loadUsers: () => void;
}

interface IState {
    readonly displayName: string;
    readonly profilePicture: string | null | ArrayBuffer;
    readonly profilePictureFile: File | null;
}

export class EditUserModal extends React.PureComponent<EditUserModalStateProps & EditUserModalDispatchProps, IState> {
    constructor(props) {
        super(props);
        const {displayName, profilePicture} = this.props.user.customData;
        this.state = {
            displayName,
            profilePicture,
            profilePictureFile: null,
        };
    }

    componentDidMount() {
        this.props.loadUsers();
    }

    private handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        const displayName = event.currentTarget.value;
        this.setState(_ => ({displayName}));
    };

    private edit = () => {
        this.props.editUser(this.state.profilePictureFile, this.state.displayName);
    };

    private handleProfilePictureChange = (e) => {
        e.preventDefault();

        const reader = new FileReader();
        const profilePictureFile = e.target.files[0];

        this.setState(_ => ({profilePictureFile}));

        reader.onloadend = () => {
            const profilePicture = reader.result;
            this.setState(_ => ({profilePicture}));
        };

        reader.readAsDataURL(profilePictureFile);
    };

    render() {
        const {show, user, hideEditUserModal, isLoading, apiResponseErrorMessage} = this.props;
        return (
            <div>
                <Modal show={show}>
                    <Modal.Header onHide={hideEditUserModal}>
                        <Modal.Title>
                            Edit user {user.email}
                        </Modal.Title>
                    </Modal.Header>
                    {isLoading ? <ScaleLoader/> :
                        <div>
                          <Modal.Body>
                              {apiResponseErrorMessage && <Alert bsStyle="danger">
                                <h4>Editing failed</h4>
                                <p>
                                    {apiResponseErrorMessage}
                                </p>
                              </Alert>}
                            <Col xs={6}>
                              <FormControl
                                type="file"
                                onChange={this.handleProfilePictureChange}
                              />
                            </Col>
                            <Col xs={6}>
                                {this.state.profilePicture && <Image src={this.state.profilePicture} circle responsive/>}
                            </Col>
                            <FormControl
                              type="text"
                              value={this.state.displayName}
                              placeholder="Enter displayed name"
                              onChange={this.handleNameChange}
                            />
                          </Modal.Body>
                          <Modal.Footer>
                            <Button onClick={this.edit}>Edit</Button>
                            <Button onClick={hideEditUserModal}>Close</Button>
                          </Modal.Footer>
                        </div>
                    }
                </Modal>
            </div>
        );
    }
}

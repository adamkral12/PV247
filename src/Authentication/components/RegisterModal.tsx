import * as React from 'react';
import {
    Modal, Button, FormControl, Col, Image, Alert
} from 'react-bootstrap';
import {ScaleLoader} from 'react-spinners';

export interface RegisterModalStateProps {
    readonly show: boolean;
    readonly isLoading: boolean;
    readonly apiResponse?: string;
}

export interface RegisterModalDispatchProps {
    readonly hideModal: () => void;
    readonly addUser: (email, profilePicture, displayName) => void;
}

interface IState {
    readonly displayName: string;
    readonly profilePicture: string | null | ArrayBuffer;
    readonly email: string;
}

export class RegisterModal extends React.PureComponent<RegisterModalStateProps & RegisterModalDispatchProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            profilePicture: '',
            email: '',
        };
    }
    private handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        const displayName = event.currentTarget.value;
        this.setState(_ => ({displayName}));
    };

    private handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
        const email = event.currentTarget.value;
        this.setState(_ => ({email}));
    };

    private register = () => {
        this.props.addUser(this.state.email, this.state.profilePicture, this.state.displayName);
    };

    private handleProfilePictureChange = (e) => {
        e.preventDefault();

        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            const profilePicture = reader.result;
            this.setState(_ => ({profilePicture}));
        };

        reader.readAsDataURL(file);
    };

    render() {
        const {profilePicture, email, displayName} = this.state;
        const {show, hideModal, apiResponse} = this.props;

        return (
            <div>
                <Modal show={show}>
                    <Modal.Header onHide={hideModal}>
                        <Modal.Title>
                            Register yourself
                        </Modal.Title>
                    </Modal.Header>
                    {this.props.isLoading ? <ScaleLoader/> :
                <div>
                    <Modal.Body>
                        {apiResponse && <Alert bsStyle="danger">
                          <h4>Registration failed</h4>
                          <p>
                              {apiResponse}
                          </p>
                        </Alert>}
                        <Col xs={6}>
                            {profilePicture && <Image src={profilePicture} circle responsive/>}
                        </Col>
                        <Col xs={6}>
                            <FormControl
                                type="file"
                                onChange={this.handleProfilePictureChange}
                            />
                        </Col>
                        <Col xs={6}>
                            <FormControl
                                type="text"
                                value={displayName}
                                placeholder="Enter displayed name"
                                onChange={this.handleNameChange}
                            />
                            <FormControl
                                type="text"
                                value={email}
                                placeholder="Enter email"
                                onChange={this.handleEmailChange}
                            />
                        </Col>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.register}>Register</Button>
                        <Button onClick={hideModal}>Close</Button>
                    </Modal.Footer>
                </div>
                    }
                </Modal>

            </div>
        );
    }
}

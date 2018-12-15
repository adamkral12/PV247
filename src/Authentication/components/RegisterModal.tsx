import * as React from 'react';
import {
    Modal, Button, FormControl, Col, Alert, Row
} from 'react-bootstrap';
import {ScaleLoader} from 'react-spinners';

export interface RegisterModalStateProps {
    readonly show: boolean;
    readonly isLoading: boolean;
    readonly apiResponse?: string;
}

export interface RegisterModalDispatchProps {
    readonly hideModal: () => void;
    readonly addUser: (email: string, displayName: string) => void;
}

interface IState {
    readonly displayName: string;
    readonly email: string;
}

export class RegisterModal extends React.PureComponent<RegisterModalStateProps & RegisterModalDispatchProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
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
        this.props.addUser(this.state.email, this.state.displayName);
    };

    render() {
        const {email, displayName} = this.state;
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
                        <Row>
                            <Col xs={6}>
                                <FormControl
                                    type="text"
                                    value={displayName}
                                    placeholder="Enter displayed name"
                                    onChange={this.handleNameChange}
                                    onKeyPress={event => {
                                        if (event.key === 'Enter') {
                                            this.register();
                                        }
                                    }}
                                />
                                <FormControl
                                    type="text"
                                    value={email}
                                    placeholder="Enter email"
                                    onChange={this.handleEmailChange}
                                    onKeyPress={event => {
                                        if (event.key === 'Enter') {
                                            this.register();
                                        }
                                    }}
                                />
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={this.register}>Register</Button>
                        <Button bsStyle="primary" onClick={hideModal}>Close</Button>
                    </Modal.Footer>
                </div>
                    }
                </Modal>

            </div>
        );
    }
}

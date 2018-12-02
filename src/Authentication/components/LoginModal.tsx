import * as React from 'react';
import {
    Modal, Button, FormControl, Alert
} from 'react-bootstrap';

export interface ILoginModalStateProps {
    readonly show: boolean;
    readonly apiResponseErrorMessage?: string;
}

export interface ILoginModalDispatchProps {
    readonly login: (email) => void;
    readonly hide: () => void;
}

interface IState {
    readonly email: string;
}

export class LoginModal extends React.PureComponent<ILoginModalStateProps & ILoginModalDispatchProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }

    private handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
        const email = event.currentTarget.value;
        this.setState(_ => ({email}));
    };

    private login = () => {
        this.props.login(this.state.email);
    };

    render() {
        const {hide, apiResponseErrorMessage} = this.props;
        return (
            <div>
                <Modal show={this.props.show} onHide={hide}>
                    <Modal.Header>
                        <Modal.Title>
                            Login
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {apiResponseErrorMessage && <Alert bsStyle="danger">
                            <h4>Could not log you in</h4>
                            <p>
                                {apiResponseErrorMessage}
                            </p>
                        </Alert>}
                        <FormControl
                            type="text"
                            value={this.state.email}
                            placeholder="Enter email address"
                            onChange={this.handleEmailChange}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.login();
                                }
                            }}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.login}>Login</Button>
                        <Button bsStyle="default" onClick={hide} >Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

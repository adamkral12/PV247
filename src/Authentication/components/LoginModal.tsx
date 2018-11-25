import * as React from 'react';
import {
    Modal, Button, FormControl
} from 'react-bootstrap';

export interface ILoginModalStateProps {
    readonly show: boolean;
}

export interface ILoginModalDispatchProps {
    readonly login: (email) => void;
    readonly switchToRegistration: () => void;
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

    private switchToRegistration = () => {
        this.props.switchToRegistration();
    };

    render() {
        return (
            <div>
                <Modal show={this.props.show}>
                    <Modal.Header>
                        <Modal.Title>
                            Login
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl
                            type="text"
                            value={this.state.email}
                            placeholder="Enter email address"
                            onChange={this.handleEmailChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.login}>Login</Button>
                        <Button bsStyle="default" onClick={this.switchToRegistration} >Register</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

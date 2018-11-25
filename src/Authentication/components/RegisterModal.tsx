import * as React from 'react';
import {
    Modal, Button, FormControl
} from 'react-bootstrap';

export interface IRegisterModalStateProps {
    readonly show: boolean;
}

export interface IRegisterModalDispatchProps {
    readonly register: (email) => void;
    readonly hide: () => void;
}

interface IState {
    readonly email: string;
}

export class RegisterModal extends React.PureComponent<IRegisterModalStateProps & IRegisterModalDispatchProps, IState> {
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

    private register = () => {
        this.props.register(this.state.email);
    };

    render() {
        const {hide} = this.props;
        return (
            <div>
                <Modal show={this.props.show} onHide={hide}>
                    <Modal.Header>
                        <Modal.Title>
                            Register
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
                        <Button bsStyle="primary" onClick={this.register}>Register</Button>
                        <Button bsStyle="primary" onClick={hide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

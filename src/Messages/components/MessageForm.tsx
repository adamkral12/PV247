import * as React from 'react';
import './MessageBoard.css';
import {
    FormControl, Button
} from 'react-bootstrap';


interface IState {
    readonly message: string;
}

export interface IMessageFormDispatchProps {
    readonly createMessage: (message: string) => void;
}

export class MessageForm extends React.PureComponent<IMessageFormDispatchProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    private handleMessageChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        const message = event.currentTarget.value;
        this.setState(_ => ({message}));
    }

    private create = () => {
        this.props.createMessage(this.state.message);
        this.setState(_ => ({message: ''}));
    };

    render() {
        return (
            <div>
                <FormControl
                    type="text"
                    value={this.state.message}
                    placeholder="Enter text"
                    onChange={this.handleMessageChange}
                    onSubmit={this.create}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            this.create();
                        }
                    }}
                />
                <Button
                    bsStyle="success"
                    onClick={this.create}
                >Submit
                </Button>

            </div>
        );
    }
}


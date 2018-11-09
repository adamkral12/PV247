import * as React from 'react';
import './MessageBoard.css';
import {
    FormControl, Button
} from 'react-bootstrap';
import {IUser} from '../../Channels/models/IUser';
import * as uuid from 'uuid';


interface IState {
    readonly message: string;
}

export interface IMessageFormStateProps {
    readonly channelId: string | null;
    readonly user: IUser;
}

export interface IMessageFormDispatchProps {
    readonly createMessage: (IMessage) => void;
}

export class MessageForm extends React.PureComponent<IMessageFormStateProps & IMessageFormDispatchProps, IState> {
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
        this.props.createMessage({
            id: uuid(),
            value: this.state.message,
            channelId: this.props.channelId,
            createdBy: this.props.user.email,
            updatedBy: this.props.user.email,
            customData: { votes: 0}
        });
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


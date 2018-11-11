import * as React from 'react';
import {IMessage} from '../model/IMessage';
import {Form, FormControl, Button} from 'react-bootstrap';

interface IProps {
    readonly message: IMessage;
    readonly onSave: (text: string) => void;
    readonly onCancel: () => void;
}

interface IState {
    readonly value: string;
}

export class MessageEdit extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            value: props.message.value,
        };
    }

    private onSave = (event: React.FormEvent) => {
        event.preventDefault();
        this.props.onSave(this.state.value);
        this.setState(_ => ({ value: '' }));
    };

    private onValueChanged = (event: React.FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        this.setState(_ => ({ value }));
    };

    render() {
        return (
            <Form onSubmit={this.onSave}>
                <FormControl
                    type="text"
                    value={this.state.value}
                    onChange={this.onValueChanged}
                    className="form-control"
                />
                <Button type="submit" bsStyle="primary">Save</Button>
                <Button type="button" bsStyle="default" onClick={this.props.onCancel}>Cancel</Button>
            </Form>
        );
    }
}

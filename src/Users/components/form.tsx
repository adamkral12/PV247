import * as React from 'react';
import {
    Modal, Button, FormControl, Col, Image
} from 'react-bootstrap';
import {IUser} from '../../Channels/models/IUser';

interface IProps {
    readonly value: string;
}

interface IState {
    readonly displayName: string;
}

export class KOKOTKO extends React.PureComponent<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            displayName: props.value
        };
    }

    private handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        const displayName = event.currentTarget.value;
        this.setState(_ => ({displayName}));
    };

    render() {
        // const {show, user, hideEditUserModal} = this.props;
        return (
                        <FormControl
                            type="text"
                            value={this.state.displayName}
                            placeholder="Enter displayed name"
                            onChange={this.handleNameChange}
                        />
        );
    }
}

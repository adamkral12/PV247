import * as React from 'react';
import {Modal, Button, FormControl} from 'react-bootstrap';
import {IChannel} from '../models/IChannel';
import {EditedChannels} from '../models/EditedChannels';
import {IUser} from '../models/IUser';
import * as Immutable from 'immutable';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export interface IEditChannelModalOwnProps {
    id: string | null;
}

// if channel is null, we are creating a new one
export interface IEditChannelModalStateProps {
    readonly channel: IChannel | null;
    readonly show: EditedChannels;
    readonly users: Immutable.List<IUser>;
}

export interface IEditChannelModalDispatchProps {
    readonly hideEditChannel: () => void;
}

interface IState {
    readonly invitedUsers: Array<string>;
    readonly channelName: string;
}

type IProps = IEditChannelModalStateProps & IEditChannelModalOwnProps & IEditChannelModalDispatchProps;

export class EditChannelModal extends React.PureComponent<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            invitedUsers: [],
            channelName: props.channel ? props.channel.name : null
        };
    }

    onSubmit = (event) => {
        event.preventDefault();

    };

    handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        const channelName = event.currentTarget.value;
        this.setState(_ => ({channelName}));
    };

    inviteUser = (user) => {
        console.log(user);
        const invitedUsers = user.value;
        this.setState( _ => ({ invitedUsers }));
    };

    render() {
        const { showEditChannelModal } = this.props.show;

        const userOptions = this.props.users.map((user: IUser) => {
            return {
                value: user.email,
                label: user.customData.displayName,
            };
        }).toArray();

        return (
            <div>
                <Modal show={showEditChannelModal} onHide={this.props.hideEditChannel}>
                    <Modal.Header closeButton>
                        {this.props.channel ? <Modal.Title>Edit {this.props.channel.name}</Modal.Title> :
                            <Modal.Title>Create new channel</Modal.Title>}
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl
                            type="text"
                            value={this.state.channelName}
                            placeholder=""
                            onChange={this.handleNameChange}
                        />
                    </Modal.Body>
                    <Modal.Header closeButton>
                        <Modal.Title>Invite members</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Select
                            isMulti
                            options={userOptions}
                            simpleValue
                            placeholder="Invite users"
                            ignoreCase
                            onChange={this.inviteUser}
                            value={this.state.invitedUsers}
                        />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success"
                                type="edit"
                                onClick={this.onSubmit}
                        >Edit</Button>
                        <Button onClick={this.props.hideEditChannel}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

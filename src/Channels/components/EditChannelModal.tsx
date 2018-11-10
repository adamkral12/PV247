import * as React from 'react';
import {Modal, Button, FormControl} from 'react-bootstrap';
import {IChannel} from '../models/IChannel';
import {EditedChannels} from '../models/EditedChannels';
import {IUser} from '../models/IUser';
import * as Immutable from 'immutable';
import Select from 'react-select';
import {IEditedChannelCustomData} from '../models/IEditedChannelCustomData';
import {Col, Image} from 'react-bootstrap';

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
    readonly editChannel: (name: string, customData: IEditedChannelCustomData) => void;
    readonly addChannel: (name: string, customData: IEditedChannelCustomData) => void;
    readonly deleteChannel: () => void;
}

interface IState {
    readonly invitedUsers: Array<{
        value: string,
        label: string,
    }>;
    readonly channelName: string;
    readonly show: boolean;
    readonly picture: string;
}

type IProps = IEditChannelModalStateProps & IEditChannelModalOwnProps & IEditChannelModalDispatchProps;

export class EditChannelModal extends React.PureComponent<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            invitedUsers: [],
            channelName: props.channel ? props.channel.name : '',
            show: props.show,
            picture: props.channel ? props.channel.customData.picture : '',
        };
    }

    private editChannel = (event: React.FormEvent) => {
        event.preventDefault();
        this.props.editChannel(this.state.channelName, {
            invitedUsers: Immutable.Set(this.state.invitedUsers.map((user) => {
                return user.value;
            })),
            image: this.state.picture ? this.state.picture : this.props.channel && this.props.channel.customData.image,
        });
        this.props.hideEditChannel();
    };

    private addChannel = (event: React.FormEvent) => {
        event.preventDefault();
        this.props.addChannel(this.state.channelName, {
            invitedUsers: Immutable.Set(this.state.invitedUsers.map((user) => {
                return user.value;
            })),
            image: this.state.picture ? this.state.picture : this.props.channel && this.props.channel.customData.image,
        });
        this.props.hideEditChannel();
    };

    private handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        const channelName = event.currentTarget.value;
        this.setState(_ => ({channelName}));
    };

    private inviteUser = (invitedUsers) => {
        this.setState( _ => ({ invitedUsers }));
    };

    private deleteChannel = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        this.props.deleteChannel();
        this.props.hideEditChannel();
    };

    private handlePictureChange = (e) => {
        e.preventDefault();

        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            const picture = reader.result;
            if (typeof picture === 'string') {
                this.setState(_ => ({picture}));
            }
        };

        reader.readAsDataURL(file);
    };

    render() {
        const { showEditChannelModal } = this.props.show;
        const { hideEditChannel } = this.props;

        const userOptions = this.props.users.map((user: IUser) => {
            return {
                value: user.email,
                label: user.customData.displayName,
            };
        }).toArray();

        return (
            <div>
                <Modal show={showEditChannelModal} onHide={hideEditChannel}>
                    <Modal.Header closeButton>
                        {this.props.channel ? <Modal.Title>Edit {this.props.channel.name}</Modal.Title> :
                            <Modal.Title>Create new channel</Modal.Title>}
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl
                            type="text"
                            value={this.state.channelName}
                            placeholder="Channel name"
                            onChange={this.handleNameChange}
                        />
                    </Modal.Body>
                    <Modal.Header closeButton={false}>
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
                    <Modal.Header closeButton={false}>
                        <Modal.Title>Change channel picture</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Col xs={6}>
                            {this.state.picture && <Image src={this.state.picture} circle responsive/>}
                        </Col>
                        <FormControl
                            type="file"
                            placeholder="change profile picture"
                            onChange={this.handlePictureChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success"
                                type="submit"
                                onClick={this.props.channel ? this.editChannel : this.addChannel}
                        >
                            {this.props.channel ? 'Edit' : 'Create'}
                        </Button>
                        <Button type="submit" onClick={this.props.hideEditChannel}>Close</Button>
                        {this.props.channel && <Button bsStyle="danger"  type="submit" onClick={this.deleteChannel}>Delete</Button>}
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

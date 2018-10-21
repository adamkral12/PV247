import * as React from 'react';
import {Modal, Button, FormControl} from 'react-bootstrap';
import {IChannel} from "../models/IChannel";
import {EditedChannels} from "../models/EditedChannels";

export interface IEditChannelModalOwnProps {
    id: string | null;
}

// if channel is null, we are creating a new one
export interface IEditChannelModalStateProps {
    readonly channel: IChannel | null;
    readonly show: EditedChannels;
}

export interface IEditChannelModalDispatchProps {
    readonly hideEditChannel: () => void;
}

export class EditChannelModal extends React.PureComponent<IEditChannelModalStateProps & IEditChannelModalOwnProps & IEditChannelModalDispatchProps> {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || "",
            isSubmitLoading: false

        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        // unset loading state when done
        this.setState({ isSubmitLoading: true });

        //this.props.onEdit(this.state.displayName);
    };

    handleNameChange = (event) => {
        console.log(event);
        this.setState({ value: event})
    };

    render() {
        const { showEditChannelModal, editedChannelId } = this.props.show;
        console.log(this.props.channel);
        return (
            <div>
                <Modal show={showEditChannelModal} onHide={this.props.hideEditChannel}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit channel name {editedChannelId}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl
                            type="text"
                            // value={this.state.value}
                            placeholder=""
                            onChange={this.handleNameChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success"
                                type="submit"
                                // disabled={this.state.isSubmitLoading}
                                // onClick={this.state.isSubmitLoading ? null : this.onSubmit}
                        >Edit</Button>
                        <Button onClick={this.props.hideEditChannel}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

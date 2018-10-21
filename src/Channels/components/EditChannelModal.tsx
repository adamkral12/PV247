import * as React from 'react';
import {Modal, Button, FormControl} from 'react-bootstrap';
import {IChannel} from "../models/IChannel";

export interface IEditChannelModalOwnProps {
    id: string;
}

// if channel is null, we are creating a new one
export interface IEditChannelModalStateProps {
    readonly channel: IChannel | null;
    readonly show: boolean;
}

export class EditChannelModal extends React.PureComponent<IEditChannelModalStateProps & IEditChannelModalOwnProps> {
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
        return (
            <div>
                <Modal show={this.props.show}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit channel name</Modal.Title>
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
                        {/*<Button onClick={this.props.onClose}>Close</Button>*/}
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

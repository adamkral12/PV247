import React, { Component } from 'react';
import {Modal, Button, FormControl} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class NewChannelModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: "",
        };
    }
    
    onSubmit = () => {
        this.props.onCreateChannel(this.state);
    };

    handleNameChange = (event) => {
        console.log(event);
        this.setState({ displayName: event})
    };

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New channel</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl
                            type="text"
                            value={this.state.displayName}
                            placeholder="Enter displayed name"
                            onChange={this.handleNameChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success"
                                type="submit"
                                disabled={this.state.isSubmitLoading}
                                onClick={this.state.isSubmitLoading ? null : this.onSubmit}
                        >Create</Button>
                        <Button onClick={this.props.onClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

NewChannelModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onCreateChannel: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

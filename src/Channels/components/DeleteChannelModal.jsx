import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class DeleteChannelModal extends Component {
    // handleClose = () => {
    //   this.setState({ show: false });
    // };
    //
    // handleShow = () => {
    //   this.setState({ show: true });
    // };

    render() {
      return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
Delete channel
{this.props.channelName}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete this channel?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="danger" onClick={this.props.onDelete}>Delete</Button>
                        <Button onClick={this.props.onClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
      );
    }
}

DeleteChannelModal.propTypes = {
  channelName: PropTypes.string.isRequired,
  channelId: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

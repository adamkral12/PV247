import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';

export class DeleteChannelModal extends React.PureComponent {
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
                <Modal>
                    <Modal.Header closeButton>
                        <Modal.Title>
                          Delete channel
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete this channel?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="danger">Delete</Button>
                        <Button >Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
      );
    }
}

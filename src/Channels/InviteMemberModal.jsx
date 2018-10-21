import React, { Component } from 'react';
import {
    Modal,
    Button
} from 'react-bootstrap';

import PropTypes from 'prop-types';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';


import BootstrapTable from 'react-bootstrap-table-next';

export default class InviteMemberModal extends Component {
    nameFormatter(cell, row) {
        return (<div className="text-center" align="middle">{cell}</div>)
    }/*
    imageFormatter(cell, row) {
        return (<img style={{width:50}} src={cell}/>)
    }*/
    renderButtons(cell, row) {
        return (
            <span>
        <Button
            className="btn btn btn-primary btn-sm"
            type="button"
            data-toggle="tooltip"
            recordable_id={cell}
        >
          Invite
        </Button>
      </span>
        );
    }

    render() {
        const columns = [/*{
            dataField: "customData.profilePicture",
            formatter: this.imageFormatter
        },*/
            {
                text: "", //"name",
                dataField: 'customData.displayName',
                //formatter:this.nameFormatter,
                filter: textFilter() // apply text filter
            },
            {
                dataField: 'email',
                formatter: this.renderButtons
            },
        ]

        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Invite members</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <BootstrapTable
                            headerClasses="show-hidden"
                            keyField='email'
                            data = {this.props.users}
                            bordered={false}
                            columns={columns}
                            pagination={ paginationFactory() }
                            filter={ filterFactory() }
                        />


                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

InviteMemberModal.propTypes = {
    users:PropTypes.arrayOf(
        PropTypes.shape({
                email: PropTypes.string.isRequired,
                customData: PropTypes.shape({
                    profilePicture: PropTypes.string.isRequired,
                    displayName: PropTypes.string.isRequired
                }).isRequired,
            }).isRequired),
    channelId: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

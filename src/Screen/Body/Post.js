import React, { Component } from 'react';
import {
  Col, Badge, Button, ButtonGroup, Glyphicon, Image, Panel, Row
} from "react-bootstrap";
import './Post.css';
import "../../index.css";
import PropTypes from 'prop-types';

export default class Post extends Component {
  render() {
    return (
            <div >
                <Row className="row">
                    <Col xs={2} sm={1} className="vertAlCenter">
                        <Image
                          className="image"
                          src={this.props.user.customData.profilePicture}
                          circle
                        />
                    </Col>
                    <Col xs={10} sm={11} className="vertAlCenter">
                        <Panel className="panel">
                            <Panel.Heading>
                                {this.props.user.customData.displayName}
                            </Panel.Heading>
                            <Panel.Body>
                                    <Col xs={8}>
                                        <p>{this.props.messageValue}</p>
                                    </Col>
                                    <Col xs={1}>
                                        <Badge>{this.props.customData.votes}</Badge>
                                    </Col>
                                    <Col xs={2}>
                                        <ButtonGroup>
                                            <Button>
                                                <Glyphicon glyph="thumbs-up"/>
                                            </Button>
                                            <Button>
                                                <Glyphicon glyph="thumbs-down"/></Button>
                                            <Button>
                                                <Glyphicon glyph="glyphicon glyphicon-trash"/>
                                            </Button>
                                        </ButtonGroup>
                                    </Col>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </div>
    );
  }
}

Post.propTypes = {
  messageValue: PropTypes.string.isRequired,
  messageId: PropTypes.string.isRequired,
  customData: PropTypes.shape({
    votes: PropTypes.number.isRequired
  }),
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    customData: PropTypes.shape({
      profilePicture: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
};

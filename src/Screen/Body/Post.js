import React, { Component } from 'react';
import {Col, Badge, Button, ButtonGroup, Glyphicon, Image, Panel, Row} from "react-bootstrap";
import './Post.css'
import './../../index.css';

/*
name, message, karma?, avatar
* */
/*
karma + buttons ako vlastna komponenta?
farba Panel.Heading podla ratingu?
 */

export default class Post extends Component {
    render() {
        return (
            <div >
                <Row className="row">
                    <Col xs={1} className="vertAlCenter">
                        <Image className="image" src="https://profile.actionsprout.com/default.jpeg" circle />
                    </Col>
                    <Col xs={11} className="vertAlCenter">
                        <Panel className="panel">
                            <Panel.Heading>
                                Name
                            </Panel.Heading>
                            <Panel.Body>
                                <Row>
                                    <Col xs={8}>
                                        <p>This is my message. I am an annoying piece of shit.</p>
                                    </Col>
                                    <Col xs={1}>
                                        <Badge>5</Badge>
                                    </Col>
                                    <Col xs={2}>
                                        <ButtonGroup>
                                            <Button>+</Button>
                                            <Button>-</Button>
                                            {true && <Button>
                                                <Glyphicon glyph="glyphicon glyphicon-trash"/>
                                            </Button>}
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </div>
        );
    }
}

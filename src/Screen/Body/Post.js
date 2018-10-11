import React, { Component } from 'react';
import Col from "react-bootstrap/es/Col";
import {Badge, Button, ButtonGroup, Image, Panel, Row} from "react-bootstrap";
//import './Post.css'

import * as styles from './Post.css'

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
                <Row id = "row">
                    <Col xs={1} id={"vertAlCenter"}>
                        <Image id={"image"} src="https://profile.actionsprout.com/default.jpeg" circle />
                    </Col>
                    <Col xs={11} id ={"vertAlCenter"}>
                        <Panel id = {"panel"}>
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
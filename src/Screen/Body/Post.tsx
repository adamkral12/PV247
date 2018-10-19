import * as React from 'react';
import {
  Col, Button, ButtonGroup, Glyphicon, Image, Panel, Row
} from "react-bootstrap";
import './Post.css';
import "../../index.css";

export class Post extends React.PureComponent {
  render() {
    return (
            <div >
                <Row className="row">
                    <Col xs={2} sm={1} className="vertAlCenter">
                        <Image
                          className="image"
                          circle
                        />
                    </Col>
                    <Col xs={10} sm={11} className="vertAlCenter">
                        <Panel className="panel">
                            <Panel.Heading>
                            </Panel.Heading>
                            <Panel.Body>
                                    <Col xs={8}>
                                        {/*<p>{this.props.messageValue}</p>*/}
                                    </Col>
                                    <Col xs={1}>
                                        {/*<Badge>{this.props.customData.votes}</Badge>*/}
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

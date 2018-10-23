import * as React from 'react';
import {
  Col, Button, ButtonGroup, Glyphicon, Image, Panel, Row, Badge
} from 'react-bootstrap';
import './Post.css';
import '../../index.css';
import {IUser} from '../../Channels/models/IUser';
import {IMessage} from '../model/IMessage';

export interface IPostProps {
    readonly user: IUser;
    readonly message: IMessage;
}

export class Post extends React.PureComponent<IPostProps> {
  render() {
    return (
            <div>
                <Row className="row">
                    <Col xs={2} sm={1} className="vertAlCenter">
                        <Image
                          className="image"
                          circle
                          src={this.props.user.customData.profilePicture}
                        />
                    </Col>
                    <Col xs={10} sm={11} className="vertAlCenter">
                        <Panel className="panel">
                            <Panel.Heading>
                                {this.props.user.customData.displayName}
                            </Panel.Heading>
                            <Panel.Body>
                                    <Col xs={8}>
                                        <p>{this.props.message.value}</p>
                                    </Col>
                                    <Col xs={1}>
                                        <Badge>{this.props.message.customData.votes}</Badge>
                                    </Col>
                                    <Col xs={2}>
                                        <ButtonGroup>
                                            <Button>
                                                <Glyphicon glyph="thumbs-up"/>
                                            </Button>
                                            <Button>
                                                <Glyphicon glyph="thumbs-down"/>
                                            </Button>
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

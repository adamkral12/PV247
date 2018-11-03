import * as React from 'react';
import {
    Col, Button, ButtonGroup, Glyphicon, Image, Panel, Row, Badge
} from 'react-bootstrap';
import './Post.css';
import '../../index.css';
import {IUser} from '../../Channels/models/IUser';
import {IMessage} from '../model/IMessage';

export interface IPostOwnProps {
    readonly id: Uuid;
    readonly index: number;
}

export interface IPostDispatchProps {
    readonly delete: () => void;
    readonly onUpvote: () => void;
    readonly onDownvote: () => void;

}

export interface IPostStateProps {
    readonly message: IMessage;
    readonly user: IUser;

}

interface IState {

}

type IProps = IPostOwnProps & IPostDispatchProps & IPostStateProps;

export class Post extends React.PureComponent<IProps, IState> {

    constructor(props) {
        super(props);
    }

    /*
    private delete = () => {
        alert("del");
        this.props.deleteMessage(this.props.id);
    }*/

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
                                {this.props.message.createdBy}
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
                                        <Button
                                            onClick={this.props.onUpvote}>
                                            <Glyphicon glyph="thumbs-up"
                                            />
                                        </Button>
                                        <Button
                                            onClick={this.props.onDownvote}>
                                            <Glyphicon glyph="thumbs-down"
                                            />
                                        </Button>
                                        {(this.props.user.email === this.props.message.createdBy)
                                            ?
                                            <Button
                                                onClick={this.props.delete}>
                                                <Glyphicon glyph="glyphicon glyphicon-trash"
                                                />
                                            </Button>
                                            : null
                                        }
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

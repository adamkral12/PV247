import * as React from 'react';
import {
    Col, Image, Panel, Row
} from 'react-bootstrap';
import './Post.css';
import '../../index.css';
import {IUser} from '../../Channels/models/IUser';
import {IMessage} from '../model/IMessage';
import {MessageEdit} from './MessageEdit';
import {MessageDisplay} from './MessageDisplay';

export interface IPostOwnProps {
    readonly id: Uuid;
    readonly index: number;
}

export interface IPostDispatchProps {
    readonly delete: () => void;
    readonly upvote: () => void;
    readonly downvote: () => void;
    readonly cancelEditing: () => void;
    readonly startEditing: () => void;
}

export interface IPostStateProps {
    readonly message: IMessage;
    readonly user: IUser;
    readonly author: IUser;
    readonly isBeingEdited: boolean;
}

type IProps = IPostOwnProps & IPostDispatchProps & IPostStateProps;

export class Message extends React.PureComponent<IProps> {
    render() {
        const {isBeingEdited, message, cancelEditing, upvote, downvote, startEditing, user} = this.props;
        return (
            <div>
                <Row className="row">
                    <Col xs={2} sm={1} className="vertAlCenter">
                        <Image
                            className="image"
                            circle
                            src={this.props.author.customData.profilePicture}
                        />
                    </Col>
                    <Col xs={10} sm={11} className="vertAlCenter">
                        <Panel className="panel">
                            <Panel.Heading>
                                {this.props.author.customData.displayName}
                            </Panel.Heading>
                            {isBeingEdited ? <MessageEdit message={message} onCancel={cancelEditing}/> :
                                <MessageDisplay message={message} delete={this.props.delete} upvote={upvote}
                                                downvote={downvote} startEditing={startEditing} user={user}/>}
                        </Panel>
                    </Col>
                </Row>
            </div>
        );
    }
}

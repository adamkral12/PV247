import * as React from 'react';
import {
    Col, Button, ButtonGroup, Glyphicon, Panel, Badge
} from 'react-bootstrap';
import {IMessage} from '../model/IMessage';
import {IUser} from '../../Channels/models/IUser';
import {EditorState, convertFromRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';

export interface IMessageDispatchProps {
    readonly delete: () => void;
    readonly upvote: () => void;
    readonly downvote: () => void;
    readonly startEditing: () => void;

}

export interface IMessageStateProps {
    readonly message: IMessage;
    readonly user: IUser;
}

type IProps = IMessageDispatchProps & IMessageStateProps;

export class MessageDisplay extends React.PureComponent<IProps> {
    public render() {
        return (
            <Panel.Body>
                <Col xs={8}>
                    <Editor
                        editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.message.value)))}
                        toolbarHidden
                        readonly
                    />
                </Col>
                <Col xs={1}>
                    <Badge>{this.props.message.customData.votes}</Badge>
                </Col>
                <Col xs={2}>
                    <ButtonGroup>
                        {(this.props.user.email !== this.props.message.createdBy)
                            ?
                            <div>
                                <Button
                                    onClick={this.props.upvote}>
                                    <Glyphicon glyph="thumbs-up"
                                    />
                                </Button>
                                <Button
                                    onClick={this.props.downvote}>
                                    <Glyphicon glyph="thumbs-down"
                                    />
                                </Button>
                            </div>
                            :
                            <div>
                                <Button
                                    onClick={this.props.delete}>
                                    <Glyphicon glyph="trash"
                                    />
                                </Button>
                                <Button
                                    onClick={this.props.startEditing}>
                                    <Glyphicon glyph="edit"
                                    />
                                </Button>
                            </div>
                        }
                    </ButtonGroup>
                </Col>
            </Panel.Body>
        );
    }
}

import * as React from 'react';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Button } from 'react-bootstrap';
import { Editor } from 'react-draft-wysiwyg';
import {IChannelMember} from './CreateMessageRichTextEditor';


export interface IRichTextEditorOwnProps {
    readonly messageId: string;
    readonly messageText: string;
}

export interface IRichTextEditorStateProps {
    readonly channelMembers: Array<IChannelMember>;
}

export interface IRichTextEditorProps {
    readonly updateMessage: (id: string, message: string) => void;
}
export interface IState {
    readonly editorState: EditorState;

}

export class UpdateMessageRichTextEditor extends React.PureComponent<IRichTextEditorProps & IRichTextEditorStateProps & IRichTextEditorOwnProps, IState> {
    constructor(props) {
        super(props);
        const editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.messageText)));
        this.state = {
            editorState,
        };
    }

    private _updateMessage = () => {
        this.props.updateMessage(this.props.messageId, convertToRaw(this.state.editorState.getCurrentContent()));
    };

    private onEditorStateChange = (editorState) => {
        this.setState(() => ({
            editorState,
        }));
    };

    render() {
        return (
            <div className="back">
                <Editor
                    editorState={this.state.editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    mention={{
                        separator: ' ',
                        trigger: '@',
                        suggestions: this.props.channelMembers
                    }}
                />
                <Button
                    bsStyle="success"
                    onClick={this._updateMessage}
                >Submit
                </Button>
            </div>
        );
    }
}

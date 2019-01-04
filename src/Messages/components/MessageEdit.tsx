import * as React from 'react';
import {IMessage} from '../model/IMessage';
import {Button} from 'react-bootstrap';
import {EditorState} from 'draft-js';
import {UpdateMessageRichTextEditorContainer} from '../containers/UpdateMessageRichTextEditor';

interface IProps {
    readonly message: IMessage;
    readonly onCancel: () => void;
}

interface IState {
    readonly editorState: EditorState;
}

export class MessageEdit extends React.PureComponent<IProps, IState> {
    render() {
        return (
            <div>
                <UpdateMessageRichTextEditorContainer
                    message={this.props.message}
                />
                <Button type="button" bsStyle="default" onClick={this.props.onCancel}>Cancel</Button>
            </div>
                );
    }
}

import * as React from 'react';
import {IMessage} from '../model/IMessage';
import {Button} from 'react-bootstrap';
import {EditorState, convertFromRaw} from 'draft-js';
import {UpdateMessageRichTextEditorContainer} from '../containers/UpdateMessageRichTextEditor';

interface IProps {
    readonly message: IMessage;
    readonly onSave: (text: string) => void;
    readonly onCancel: () => void;
}

interface IState {
    readonly editorState: EditorState;
}

export class MessageEdit extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(props.message.value)))
        };
    }

    render() {
        return (
            <div>
                <UpdateMessageRichTextEditorContainer
                messageId={this.props.message.id}
                messageText={this.props.message.value}/>
                <Button type="button" bsStyle="default" onClick={this.props.onCancel}>Cancel</Button>
            </div>
                );
    }
}

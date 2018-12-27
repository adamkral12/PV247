import * as React from 'react';
import { EditorState } from 'draft-js';
import { convertToRaw } from 'draft-js';
import { Button } from 'react-bootstrap';
import { Editor } from 'react-draft-wysiwyg';
// won't load - https://github.com/jpuri/react-draft-wysiwyg/issues/432
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './react-draft-wysiwyg.css';

export interface IChannelMember {
    text: string;
    value: string;
}

export interface IRichTextEditorProps {
    readonly createMessage: (message: any) => void;
}

export interface IRichTextEditorStateProps {
    readonly channelMembers: Array<IChannelMember>;
}

export interface IState {
    readonly editorState: EditorState;
}

export class CreateMessageRichTextEditor extends React.PureComponent<IRichTextEditorProps & IRichTextEditorStateProps, IState> {
  constructor(props) {
    super(props);
    this.state  = {
        editorState: EditorState.createEmpty()
};
}

    private _createMessage = () => {
      this.props.createMessage((convertToRaw(this.state.editorState.getCurrentContent())));
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
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"


                onEditorStateChange={this.onEditorStateChange}
                mention={{
                    separator: ' ',
                    trigger: '@',
                    suggestions: this.props.channelMembers,
                }}
            />
            <Button
                bsStyle="success"
                onClick={this._createMessage}
            >Submit
            </Button>
        </div>
    );
  }
}

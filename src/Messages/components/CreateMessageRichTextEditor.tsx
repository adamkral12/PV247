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

    private uploadImageCallBack(file): Promise<any> {
        return new Promise(
            (resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://api.imgur.com/3/image');
                xhr.setRequestHeader('Authorization', 'Client-ID 12d1bc24acaccd9');
                const data = new FormData();
                data.append('image', file);
                xhr.send(data);
                xhr.addEventListener('load', () => {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                });
                xhr.addEventListener('error', () => {
                    const error = JSON.parse(xhr.responseText);
                    reject(error);
                });
            }
        );
    }

  render() {
    return (
        <div className="back">
            <Editor
                editorState={this.state.editorState}
                onEditorStateChange={this.onEditorStateChange}
                mention={{
                    separator: ' ',
                    trigger: '@',
                    suggestions: this.props.channelMembers,
                }}
                toolbar={{
                    image: { uploadCallback: this.uploadImageCallBack,  previewImage: true },
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

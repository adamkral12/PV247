import * as React from 'react';
import { EditorState } from 'draft-js';
import { convertToRaw } from 'draft-js';
import { Button } from 'react-bootstrap';
import { Editor } from 'react-draft-wysiwyg';
// won't load - https://github.com/jpuri/react-draft-wysiwyg/issues/432
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './react-draft-wysiwyg.css';
import {Pv247Service} from '../../api/service/Pv247Service';

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

    private uploadImageCallBack = async (file: File): Promise<any> => {
        const uploadedFile = await Pv247Service.uploadFile(file);
        if (uploadedFile) {
            const getFile = await Pv247Service.getFile(uploadedFile[0].id);
            return { data: { link: getFile.fileUri } };
        }
    };

  render() {
    return (
        <div>
            <Editor
                editorState={this.state.editorState}
                onEditorStateChange={this.onEditorStateChange}
                mention={{
                    separator: ' ',
                    trigger: '@',
                    suggestions: this.props.channelMembers,
                }}
                toolbar={{
                    image: {
                        uploadCallback: this.uploadImageCallBack,
                        previewImage: true,
                        defaultSize: {
                            height: '200px',
                            width: 'auto',
                        }
                    }
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

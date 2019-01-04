import * as React from 'react';
import {convertFromRaw, EditorState} from 'draft-js';
import { convertToRaw } from 'draft-js';
import { Button } from 'react-bootstrap';
import {Editor, RawDraftContentState} from 'react-draft-wysiwyg';
import './react-draft-wysiwyg.css';
import {Pv247Service} from '../../api/service/Pv247Service';
import {IMessage} from '../model/IMessage';

export interface IChannelMember {
    text: string;
    value: string;
}

export interface IRichTextEditorOwnProps {
    readonly message: IMessage;
}

export interface IRichTextEditorDispatchProps {
    readonly submit: (message: RawDraftContentState, id?: string) => void;
}

export interface IRichTextEditorStateProps {
    readonly message?: IMessage;
    readonly channelMembers: Array<IChannelMember>;
}

export interface IState {
    readonly editorState: EditorState;
}

export class RichTextEditor extends React.PureComponent<IRichTextEditorOwnProps & IRichTextEditorDispatchProps & IRichTextEditorStateProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            editorState: this.props.message ? EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.message.value))) : EditorState.createEmpty()
        };
    }

    private createMessage = (): void => {
      this.props.submit((convertToRaw(this.state.editorState.getCurrentContent())), this.props. message ? this.props.message.id : undefined);
    };

    private onEditorStateChange = (editorState): void => {
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
                onClick={this.createMessage}
            >Submit
            </Button>
        </div>
    );
  }
}

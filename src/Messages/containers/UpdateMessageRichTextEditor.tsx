import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {updateMessage} from '../actionCreators/actionCreators';
import {
    IRichTextEditorProps,
    UpdateMessageRichTextEditor
} from '../components/UpdateMessageRichTextEditor';
import {IState} from '../../common/IState';
import {IChannelMember, IRichTextEditorStateProps} from '../components/CreateMessageRichTextEditor';
import {RawDraftContentState} from 'react-draft-wysiwyg';

const mapStateToProps = (state: IState): IRichTextEditorStateProps => {
    if (state.channelList.selectedChannelId !== null && state.channelList.selectedChannelId !== undefined) {
        const channelMembers = state.channelList.channels.byId.get(state.channelList.selectedChannelId).customData.members.toArray();
        const channelMemberForAnnotations = new Array<IChannelMember>();
        channelMembers.forEach((member) => {
            channelMemberForAnnotations.push({text: member, value: member});
        });
        return {
            channelMembers: channelMemberForAnnotations
        };
    }
    return {channelMembers: []};
};

const mapDispatchToProps = (dispatch: Dispatch): IRichTextEditorProps => {
    return {
        updateMessage: (messageId: string, message: RawDraftContentState) => {
            dispatch(updateMessage(messageId, message));
        }
    };
};

export const UpdateMessageRichTextEditorContainer = connect<IRichTextEditorStateProps, IRichTextEditorProps>(mapStateToProps, mapDispatchToProps)(UpdateMessageRichTextEditor);

import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {updateMessage} from '../actionCreators/actionCreators';
import {IState} from '../../common/IState';
import {RichTextEditor, IChannelMember, IRichTextEditorOwnProps, IRichTextEditorDispatchProps, IRichTextEditorStateProps} from '../components/RichTextEditor';
import {RawDraftContentState} from 'react-draft-wysiwyg';

const mapStateToProps = (state: IState, ownProps: IRichTextEditorOwnProps): IRichTextEditorStateProps => {
    if (state.channelList.selectedChannelId !== null && state.channelList.selectedChannelId !== undefined) {
        const channelMembers = state.channelList.channels.byId.get(state.channelList.selectedChannelId).customData.members.toArray();
        const channelMemberForAnnotations = new Array<IChannelMember>();
        channelMembers.forEach((member) => {
            channelMemberForAnnotations.push({text: member, value: member});
        });
        return {
            message: ownProps.message,
            channelMembers: channelMemberForAnnotations
        };
    }
    return {
        message: ownProps.message,
        channelMembers: []
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IRichTextEditorDispatchProps => {
    return {
        submit: (message: RawDraftContentState, messageId: string) => {
            dispatch(updateMessage(messageId, message));
        }
    };
};

export const UpdateMessageRichTextEditorContainer = connect<IRichTextEditorStateProps, IRichTextEditorDispatchProps>(mapStateToProps, mapDispatchToProps)(RichTextEditor);

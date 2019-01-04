import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {createMessage} from '../actionCreators/actionCreators';
import {
    IRichTextEditorDispatchProps,
    RichTextEditor, IRichTextEditorStateProps
} from '../components/RichTextEditor';
import {IState} from '../../common/IState';
import {IChannelMember} from '../components/RichTextEditor';
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
const mapDispatchToProps = (dispatch: Dispatch): IRichTextEditorDispatchProps => {
    return {
        submit: (message: RawDraftContentState) => {
            dispatch(createMessage(message));
        },
    };
};

export const CreateRichTextEditorContainer = connect<IRichTextEditorStateProps, IRichTextEditorDispatchProps>(mapStateToProps, mapDispatchToProps)(RichTextEditor);

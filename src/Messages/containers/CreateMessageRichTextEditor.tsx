import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {createMessage} from '../actionCreators/actionCreators';
import {
    IRichTextEditorProps,
    CreateMessageRichTextEditor, IRichTextEditorStateProps
} from '../components/CreateMessageRichTextEditor';
import {IState} from '../../common/IState';
import {IChannelMember} from '../components/CreateMessageRichTextEditor';

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
        createMessage: (message: any) => {
            dispatch(createMessage(message));
        },
        // channelMembers: state.channelList.channels.byId.get(state.channelList.selectedChannelId).customData.members.toArray()
    };
};

export const RichTextEditorContainer1 = connect<IRichTextEditorStateProps, IRichTextEditorProps>(mapStateToProps, mapDispatchToProps)(CreateMessageRichTextEditor);

import {IState} from "../../common/IState";
import {EditChannelModal, IEditChannelModalOwnProps, IEditChannelModalStateProps} from "../components/EditChannelModal";
import {IChannel} from "../models/IChannel";
import {connect} from "react-redux";

const mapStateToProps = (state: IState, ownProps: IEditChannelModalOwnProps): IEditChannelModalStateProps => {
    return {
        channel: state.channelList.channels.find((i: IChannel) => i.id === ownProps.id),
        show: state.channelList.showEditChannelModal
    }
};

export const EditChannelModalContainer = connect<IEditChannelModalStateProps, IEditChannelModalOwnProps>(mapStateToProps)(EditChannelModal);

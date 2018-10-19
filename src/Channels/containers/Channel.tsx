import { connect } from "react-redux";
import { Dispatch } from "redux";
// import {IState } from "../../common/IState";
import {Channel, IChannelDispatchProps, IChannelItemStateProps } from "../components/Channel";
// import {cancelEditingChannel, removeChannel, startEditingChannel} from "../actions/actionCreators";
// import {toggleChannel} from "../actions/updateItem";
import {IChannel} from "../models/IChannel";

const mapStateToProps = (state: IChannel) => {
    console.log("channel container");
    console.log(state);
    return {
        name: state.name
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // onEdit: () => dispatch(startEditingChannel(ownProps.id)),
        // onDelete: () => dispatch(removeChannel(ownProps.id)),
        // onToggle: () => dispatch(toggleChannel(ownProps.id)),
        // onStartEditing: () => dispatch(startEditingChannel(ownProps.id)),
        // onCancelEditing: () => dispatch(cancelEditingChannel(ownProps.id))
    }
};

export const ChannelContainer = connect<IChannelItemStateProps>(mapStateToProps, mapDispatchToProps)(Channel);

import {connect} from "react-redux";
import {Header} from "../components/Header";

// const mapStateToProps = (state: IState): ICHannelNameStateProps => {
//     const channel = state.channelList.channels.find(
//         (i: IChannel) => i.id === state.channelList.selectedChannelId
//     );
//     return {
//         channelName: channel ? channel.name : null
//     };
// };

export const HeaderContainer = connect()(Header);

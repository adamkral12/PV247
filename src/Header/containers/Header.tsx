import {connect} from 'react-redux';
import {Header, HeaderDispatchProps, HeaderStateProps} from '../components/Header';
import {Dispatch} from 'redux';
import {showEditUser} from '../../Users/actions/actionCreators';
import {logout} from '../../Authentication/actions/actionCreators';
import {IState} from '../../common/IState';


const mapStateToProps = (state: IState): HeaderStateProps => {
    const channelId = state.channelList.selectedChannelId;
    if (channelId === undefined) {
        return {
            numberOfMembers: undefined
        };
    }
    console.log(channelId);
    const userEmails = state.channelList.channels.byId.get(channelId).customData.members;
    console.log(userEmails.toSeq().size);
    console.log(userEmails.size);
    return {
        numberOfMembers: userEmails.size
    };
};

const mapDispatchToProps = (dispatch: Dispatch): HeaderDispatchProps => {
    return {
        showEditUserModal: () => dispatch(showEditUser()),
        logout: () => dispatch(logout())
    };
};
export const HeaderContainer = connect<HeaderStateProps, HeaderDispatchProps>(mapStateToProps, mapDispatchToProps)(Header);

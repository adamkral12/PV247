import {connect} from 'react-redux';
import {Header, HeaderDispatchProps} from '../components/Header';
import {Dispatch} from 'redux';
import {showEditUser} from '../../Users/actions/actionCreators';
import {logout} from '../../Authentication/actions/actionCreators';

const mapDispatchToProps = (dispatch: Dispatch): HeaderDispatchProps => {
    return {
        showEditUserModal: () => dispatch(showEditUser()),
        logout: () => dispatch(logout())
    };
};
export const HeaderContainer = connect<{}, HeaderDispatchProps>(null, mapDispatchToProps)(Header);

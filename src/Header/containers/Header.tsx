import {connect} from 'react-redux';
import {Header, HeaderDispatchProps} from '../components/Header';
import {Dispatch} from 'redux';
import {showEditUser} from '../../Users/actions/actionCreators';

const mapDispatchToProps = (dispatch: Dispatch): HeaderDispatchProps => {
    return {
        showEditUserModal: () => dispatch(showEditUser()),
    };
};
export const HeaderContainer = connect<{}, HeaderDispatchProps>(null, mapDispatchToProps)(Header);

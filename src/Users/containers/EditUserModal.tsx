import {connect} from 'react-redux';
import {EditUserModal, EditUserModalDispatchProps, EditUserModalStateProps} from '../components/EditUserModal';
import {IState} from '../../common/IState';
import {Dispatch} from 'redux';
import {hideEditUser, editUser} from '../actions/actionCreators';
import {loadUsers} from '../actions/loadUsers';

const mapStateToProps = (state: IState): EditUserModalStateProps => {
    return {
        user: state.userApp.user,
        show: state.userApp.showEditUserModal,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): EditUserModalDispatchProps => {
    return {
        hideEditUserModal: () => dispatch(hideEditUser()),
        editUser: (email, profilePicture, displayName) =>  dispatch(editUser(email, profilePicture, displayName)),
        loadUsers: () => dispatch(loadUsers()),
    };
};
export const EditUserModalContainer = connect<EditUserModalStateProps, EditUserModalDispatchProps>(mapStateToProps, mapDispatchToProps)(EditUserModal);

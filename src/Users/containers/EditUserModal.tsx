import {connect} from 'react-redux';
import {EditUserModal, EditUserModalDispatchProps, EditUserModalStateProps} from '../components/EditUserModal';
import {IState} from '../../common/IState';
import {Dispatch} from 'redux';
import {hideEditUser} from '../actions/visibility';
import {loadUsers} from '../actions/loadUsers';
import {editUser} from '../actions/editUser';

const mapStateToProps = (state: IState): EditUserModalStateProps => {
    return {
        user: state.userApp.user,
        show: state.userApp.showEditUserModal,
        isLoading: state.userApp.isEditModalLoading,
        apiResponseErrorMessage: state.userApp.apiErrorResponse,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): EditUserModalDispatchProps => {
    return {
        hideEditUserModal: () => dispatch(hideEditUser()),
        editUser: (profilePicture, displayName) =>  dispatch(editUser(profilePicture, displayName)),
        loadUsers: () => dispatch(loadUsers()),
    };
};
export const EditUserModalContainer = connect<EditUserModalStateProps, EditUserModalDispatchProps>(mapStateToProps, mapDispatchToProps)(EditUserModal);

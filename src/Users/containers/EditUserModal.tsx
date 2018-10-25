import {connect} from 'react-redux';
import {EditUserModal, EditUserModalDispatchProps, EditUserModalStateProps} from '../components/EditUserModal';
import {IState} from '../../common/IState';
import {Dispatch} from 'redux';
import {hideEditUser, editUser} from '../actions/actionCreators';

const mapStateToProps = (state: IState): EditUserModalStateProps => {
    return {
        user: state.userApp.user,
        show: state.userApp.showEditModal,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): EditUserModalDispatchProps => {
    return {
        hideEditUserModal: () => dispatch(hideEditUser()),
        //editUser: (user) => { dispatch(editUser(user)); dispatch(hideEditUser())}
        editUser: (user) => { dispatch(editUser(user)); alert("editUserDispatched");}

    };
};
export const EditUserModalContainer = connect<EditUserModalStateProps, EditUserModalDispatchProps>(mapStateToProps, mapDispatchToProps)(EditUserModal);

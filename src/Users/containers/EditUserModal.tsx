import {connect} from 'react-redux';
import {EditUserModal, EditUserModalDispatchProps, EditUserModalStateProps} from '../components/EditUserModal';
import {IState} from '../../common/IState';
import {Dispatch} from 'redux';
import {hideEditUser, editUser} from '../actions/actionCreators';

const mapStateToProps = (state: IState): EditUserModalStateProps => {
    return {
        user: state.userApp.users.byId.get('user'),
        show: state.userApp.showEditUserModal,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): EditUserModalDispatchProps => {
    return {
        hideEditUserModal: () => dispatch(hideEditUser()),
        editUser: (email, profilePicture, displayName) =>  dispatch(editUser(email, profilePicture, displayName))

    };
};
export const EditUserModalContainer = connect<EditUserModalStateProps, EditUserModalDispatchProps>(mapStateToProps, mapDispatchToProps)(EditUserModal);

import {connect} from 'react-redux';
import {IState} from '../../common/IState';
import {Dispatch} from 'redux';
import {hideRegistrationModal} from '../actions/actionCreators';
import {RegisterModal, RegisterModalDispatchProps, RegisterModalStateProps} from '../components/RegisterModal';
import {register} from '../actions/registration';

const mapStateToProps = (state: IState): RegisterModalStateProps => {
    return {
        show: state.authenticationApp.showRegistrationModal,
        isLoading: state.authenticationApp.isRegistrationModalLoading,
        apiResponse: state.authenticationApp.registrationApiResponse,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): RegisterModalDispatchProps => {
    return {
        hideModal: () => dispatch(hideRegistrationModal()),
        addUser: (email, displayName) =>  dispatch(register(email, displayName)),
    };
};
export const RegisterModalContainer = connect<RegisterModalStateProps, RegisterModalDispatchProps>(mapStateToProps, mapDispatchToProps)(RegisterModal);

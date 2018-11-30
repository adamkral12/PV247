import {connect} from 'react-redux';
import {IState} from '../../common/IState';
import {Authentication, IAuthenticationDispatchProps, IAuthenticationStateProps} from '../components/Authentication';
import {Dispatch} from 'redux';
import {checkIfLoggedIn, showLoginModal, showRegistrationModal} from '../actions/actionCreators';

const mapStateToProps = (state: IState): IAuthenticationStateProps => {
    return {
        showLoginModal: state.authenticationApp.showLoginModal,
        showRegistrationModal: state.authenticationApp.showRegistrationModal,
        isLoggedIn: state.authenticationApp.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IAuthenticationDispatchProps => {
    return {
        showLoginModal: () => dispatch(showLoginModal()),
        showRegistrationModal: () => dispatch(showRegistrationModal()),
        checkIfLoggedIn: () => dispatch(checkIfLoggedIn()),
    };
};

export const AuthenticationContainer = connect<IAuthenticationStateProps, IAuthenticationDispatchProps>(mapStateToProps, mapDispatchToProps)(Authentication);


import {connect} from 'react-redux';
import {login} from '../actions/actionCreators';
import {Dispatch} from 'redux';
import {
    ILoginModalStateProps,
    ILoginModalDispatchProps,
    LoginModal,
} from '../components/LoginModal';
import {IState} from '../../common/IState';

const mapStateToProps = (state: IState): ILoginModalStateProps => {
    return {
        show: state.userApp.userEmail === ''
    };
};

const mapDispatchToProps = (dispatch: Dispatch): ILoginModalDispatchProps => {
    return {
        login: (email) =>  dispatch(login(email))
    };
};
export const LoginModalContainer = connect<ILoginModalStateProps, ILoginModalDispatchProps>(mapStateToProps, mapDispatchToProps)(LoginModal);

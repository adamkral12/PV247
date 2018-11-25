import {connect} from 'react-redux';
import {register} from '../actions/actionCreators';
import {Dispatch} from 'redux';
import {IState} from '../../common/IState';
import {IRegisterModalDispatchProps, IRegisterModalStateProps, RegisterModal} from '../components/RegisterModal';

const mapStateToProps = (state: IState): IRegisterModalStateProps => {
    return {
        show: state.userApp.showRegistrationModal
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IRegisterModalDispatchProps => {
    return {
        register: (email) =>  dispatch(register(email))
    };
};
export const RegisterModalContainer = connect<IRegisterModalStateProps, IRegisterModalDispatchProps>(mapStateToProps, mapDispatchToProps)(RegisterModal);

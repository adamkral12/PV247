import {connect} from 'react-redux';
import {IState} from '../../common/IState';
import {Authentication, IAuthenticationStateProps} from '../components/Authentication';

const mapStateToProps = (state: IState): IAuthenticationStateProps => {
    return {
        userEmail: state.userApp.userEmail,
    };
};

export const AuthenticationContainer = connect<IAuthenticationStateProps>(mapStateToProps)(Authentication);


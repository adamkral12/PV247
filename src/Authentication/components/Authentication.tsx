import * as React from 'react';
import {ChannelAppContainer} from '../../Channels/containers/ChannelApp';
import {HeaderContainer} from '../../Header/containers/Header';
import {Col, Row, Button} from 'react-bootstrap';
import { Screen } from '../../Screen/Screen';
import {LoginModalContainer} from '../containers/LoginModal';
import {RegisterModalContainer} from '../containers/RegisterModal';


export interface IAuthenticationStateProps {
    readonly isLoggedIn: boolean;
    readonly showLoginModal: boolean;
    readonly showRegistrationModal: boolean;
}

export interface IAuthenticationDispatchProps {
    readonly showRegistrationModal: () => void;
    readonly showLoginModal: () => void;
    readonly checkIfLoggedIn: () => void;
}

type IProps = IAuthenticationDispatchProps & IAuthenticationStateProps;

export class Authentication extends React.PureComponent<IProps> {
    componentDidMount() {
        this.props.checkIfLoggedIn();
    }

    render() {
        return (
            <div>
                {this.props.isLoggedIn ?
                <div>
                    <ChannelAppContainer/>
                    <HeaderContainer/>
                    <Col md={9} sm={9} xs={12}>
                        <Screen/>
                    </Col>
                </div>
                : <Row>
                        <Col xs={12} style={{textAlign: 'center'}}>
                            <h2>Welcome to messaging app, register or login to continue</h2>
                            <Button bsStyle="success"
                                onClick={this.props.showLoginModal}
                            >Login</Button>
                            <Button bsStyle="primary"
                                onClick={this.props.showRegistrationModal}
                            >Register</Button>
                        </Col>
                        <LoginModalContainer/>
                        <RegisterModalContainer/>
                    </Row>}
            </div>
        );
    }
}

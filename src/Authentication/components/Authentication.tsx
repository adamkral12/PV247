import * as React from 'react';
import {ChannelAppContainer} from '../../Channels/containers/ChannelApp';
import {HeaderContainer} from '../../Header/containers/Header';
import {Col} from 'react-bootstrap';
import { Screen } from '../../Screen/Screen';
import {LoginModalContainer} from '../containers/LoginModal';



export interface IAuthenticationStateProps {
    readonly userEmail: string;
}

export class Authentication extends React.PureComponent<IAuthenticationStateProps> {
    render() {
        return (
            <div>
                {this.props.userEmail !== '' ?
                <div>
                    <ChannelAppContainer/>
                    <HeaderContainer/>
                    <Col md={9} sm={9} xs={12}>
                        <Screen/>
                    </Col>
                </div>
                : <LoginModalContainer/>}
            </div>
        );
    }
}

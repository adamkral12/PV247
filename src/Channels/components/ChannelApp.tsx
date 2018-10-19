import * as React from 'react';
import * as Immutable from 'immutable';
import {Panel, Col, Button} from "react-bootstrap";
import './ChannelWrapper.css';
import {IChannelCustomData} from "../models/IChannelCustomData";
import { ChannelListContainer } from '../containers/ChannelList';
import {IChannel} from "../models/IChannel";

export interface IChannelAppStateProps {
    readonly channels: Immutable.List<IChannel>
}

export interface IChannelAppDispatchProps {
    readonly onAddChannel: (name: string, customData: IChannelCustomData) => void
}
export class ChannelApp extends React.PureComponent<IChannelAppStateProps & IChannelAppDispatchProps> {
    componentWillMount() {

    }

    render() {
        console.log("channel app cpmponent");
        console.log(this.props);
        return(
            <Col xs={2} className="channel-wrapper">
                <Panel className="dark-back">
                    <Panel.Body className="dark-back">
                        <ChannelListContainer/>
                        <Button>New Channel</Button>
                    </Panel.Body>
                </Panel>
            </Col>
        );
    }
}

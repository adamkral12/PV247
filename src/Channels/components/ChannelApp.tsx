import * as React from 'react';
import * as Immutable from 'immutable';
import ChannelSection from "./ChannelSection";
import {Panel, Col, Button} from "react-bootstrap";
import './ChannelWrapper.css';
import {IChannelCustomData} from "../models/IChannelCustomData";

export interface IChannelAppStateProps {
    readonly channels: Immutable.List<string>
}

export interface IChannelAppDispatchProps {
    readonly onAddChannel: (name: string, customData: IChannelCustomData) => void
}
export class ChannelApp extends React.PureComponent<IChannelAppStateProps & IChannelAppDispatchProps> {
    render() {
        return(
            <Col xs={2} className="channel-wrapper">
                <Panel className="dark-back">
                    <Panel.Body className="dark-back">
                        <ChannelSection
                            className="dark-back"
                            title="Channels"
                            channels={this.props.channels}
                        />
                        <Button>New Channel</Button>
                    </Panel.Body>
                </Panel>
            </Col>
        );
    }
}

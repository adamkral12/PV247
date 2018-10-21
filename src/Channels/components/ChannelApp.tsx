import * as React from 'react';
import * as Immutable from 'immutable';
import {ChannelSection} from './ChannelSection';
import {Panel, Col} from 'react-bootstrap';
import './ChannelWrapper.css';
import {NewChannel} from './NewChannel';
import {IChannel} from '../models/IChannel';
import {EditChannelModalContainer} from "../containers/EditChannelModal";
import {EditedChannels} from "../models/EditedChannels";

export interface IChannelAppStateProps {
    readonly channels: Immutable.List<IChannel>;
    readonly editedChannels: EditedChannels;
}

export interface IChannelAppDispatchProps {
    readonly onAddChannel: (name: string) => void;
}
export class ChannelApp extends React.PureComponent<IChannelAppStateProps & IChannelAppDispatchProps> {
    render() {
        console.log('edited');
        console.log(this.props.editedChannels);
        return(
            <Col xs={2} className="channel-wrapper">
                <Panel className="dark-back">
                    <Panel.Body className="dark-back">
                        <ChannelSection
                            channels={this.props.channels}
                        />
                        <NewChannel onAddChannel={this.props.onAddChannel}/>
                        <EditChannelModalContainer
                            id={this.props.editedChannels.editedChannelId}
                        />
                    </Panel.Body>
                </Panel>
            </Col>
        );
    }
}

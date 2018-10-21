import * as React from 'react';
import * as Immutable from 'immutable';
import {ChannelSection} from './ChannelSection';
import {Panel, Col} from 'react-bootstrap';
import './ChannelWrapper.css';
import {NewChannel} from './NewChannel';
import {IChannel} from '../models/IChannel';
import {EditChannelModalContainer} from '../containers/EditChannelModal';
import {EditedChannels} from '../models/EditedChannels';
import {IUser} from '../models/IUser';

export interface IChannelAppStateProps {
    readonly channels: Immutable.List<IChannel>;
    readonly editedChannels: EditedChannels;
    readonly users: Immutable.List<IUser>;
}

export interface IChannelAppDispatchProps {
    readonly onAddChannel: () => void;
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
                        {this.props.editedChannels.showEditChannelModal &&
                            <EditChannelModalContainer
                                id={this.props.editedChannels.editedChannelId}
                            />
                        }
                    </Panel.Body>
                </Panel>
            </Col>
        );
    }
}

import * as React from 'react';
import * as Immutable from 'immutable';
import {Panel, Col} from 'react-bootstrap';
import './ChannelWrapper.css';
import {NewChannel} from './NewChannel';
import {EditChannelModalContainer} from '../containers/EditChannelModal';
import {EditedChannels} from '../models/EditedChannels';
import {IUser} from '../models/IUser';
import '../css/ChannelApp.less';
import {ChannelSectionContainer} from '../containers/ChannelSection';

export interface IChannelAppStateProps {
    readonly editedChannels: EditedChannels;
    readonly users: Immutable.List<IUser>;
    readonly showListOnMobile: boolean;
}

export interface IChannelAppDispatchProps {
    readonly onAddChannel: () => void;
    readonly loadChannels: () => void;
    readonly onHideChannelListMobile: () => void;
}

export class ChannelApp extends React.PureComponent<IChannelAppStateProps & IChannelAppDispatchProps> {
    componentDidMount() {
        this.props.loadChannels();
    }

    render() {
        const channelWrapperClass = 'channel-wrapper ' + (this.props.showListOnMobile ? 'show-mobile' : '');
        return(
            <Col xs={3} className={channelWrapperClass}>
                <Panel className="dark-back">
                    <Panel.Body className="dark-back">
                        <ChannelSectionContainer/>
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

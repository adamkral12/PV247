import * as React from 'react';
import { Glyphicon } from 'react-bootstrap';
import {IChannel} from '../models/IChannel';
import '../css/Channel.less';

export interface IChannelOwnProps {
    readonly id: string;
    readonly index: number;
}

export interface IChannelStateProps {
    readonly channel: IChannel;
    readonly isSelected: boolean;
}

export interface IChannelDispatchProps {
    readonly showEditChannel: (id: string) => void;
    readonly selectChannel: (id: string) => void;
    readonly hideChannelList: () => void;
}

export class Channel extends React.PureComponent<IChannelOwnProps & IChannelStateProps & IChannelDispatchProps> {
    private onSelect = () => {
        this.props.selectChannel(this.props.id);
        this.props.hideChannelList();
    };

    private showEditChannel = (event: React.ChangeEvent<HTMLBaseElement>) => {
        event.stopPropagation();
        this.props.showEditChannel(this.props.id);
    };

    render() {
        const { index, channel, isSelected } = this.props;
        const channelClass = 'channel-name ' + (isSelected ? 'selected-channel' : '');

        return (
                <div
                    key={index}
                    className={channelClass}
                    onClick={this.onSelect}
                >{channel.name}
                    <Glyphicon glyph="edit" className="edit-channel-icon"
                               onClick={this.showEditChannel}
                    />
                </div>
      );
    }
}

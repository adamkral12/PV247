import * as React from 'react';
import { Glyphicon } from 'react-bootstrap';
import {IChannel} from '../models/IChannel';
import '../css/Channel.less';

export interface IChannelOwnProps {
    readonly id: string;
    index: number;
}

export interface IChannelStateProps {
    readonly channel: IChannel;
    readonly isSelected: boolean;
}

export interface IChannelDispatchProps {
    showEditChannel: (id: string) => void;
    selectChannel: (id: string) => void;
}

export class Channel extends React.PureComponent<IChannelOwnProps & IChannelStateProps & IChannelDispatchProps> {
    private onSelect = () => {
        this.props.selectChannel(this.props.id);
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

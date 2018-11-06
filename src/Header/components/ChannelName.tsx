import * as React from 'react';
import {Navbar} from 'react-bootstrap';

export interface IChannelNameStateProps {
    readonly channelName: string | null;
}

export const ChannelName: React.SFC<IChannelNameStateProps> = ({ channelName }) => (
    <Navbar.Brand>{channelName}</Navbar.Brand>
);

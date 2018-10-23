import * as React from 'react';
import {Navbar} from 'react-bootstrap';

export interface ICHannelNameStateProps {
    readonly channelName: string | null;
}

export const ChannelName: React.SFC<ICHannelNameStateProps> = ({ channelName }) => (
    <Navbar.Brand>{channelName}</Navbar.Brand>
);

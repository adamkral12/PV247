import * as React from 'react';
import { NavItem } from 'react-bootstrap';

export interface ICHannelNameStateProps {
    readonly channelName: string | null;
}

export const ChannelName: React.SFC<ICHannelNameStateProps> = ({ channelName }) => (
    <NavItem eventKey={1} href="#">{channelName}</NavItem>
);

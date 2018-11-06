import * as React from 'react';
import {Image} from 'react-bootstrap';
import './ChannelPicture.less';

export interface IChannelPictureStateProps {
    readonly picture: string | null;
}

export const ChannelPicture: React.SFC<IChannelPictureStateProps> = ({ picture }) => (
    <div className="channel-picture-wrapper"><Image src={picture} circle className="channel-picture"/></div>
);

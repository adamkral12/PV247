import * as Immutable from 'immutable';
import * as React from 'react';
// import { ChannelContainer } from "../containers/Channel";
import {IChannel} from "../models/IChannel";

export interface IChannelListStateProps {
    readonly channels: Immutable.List<IChannel>;
}

export class ChannelList extends React.PureComponent<IChannelListStateProps> {
    render() {
        console.log("components channel list");
        console.log(this.props.channels);
        return (
            <div className="channel-list">
                {/*{this.props.channels.map(channel => {*/}
                    {/*<ChannelContainer/>*/}
                {/*})}*/}
            </div>
        );
    }
}

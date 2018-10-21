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
}

export interface IChannelDispatchProps {
    showEditChannel: (id: string) => void;
}

export class Channel extends React.PureComponent<IChannelOwnProps & IChannelStateProps & IChannelDispatchProps> {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteChannelModal: false
    };
  }

    render() {
      const { index, channel } = this.props;
      return (
                <div
                    key={index}
                  className="channel-name"
                >{channel.name}
                    <Glyphicon glyph="edit" className="edit-channel-icon"
                               onClick={this.props.showEditChannel}
                    />
                </div>
      );
    }
}

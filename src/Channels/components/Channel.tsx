import * as React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import {IChannel} from "../models/IChannel";

export interface IChannelOwnProps {
    readonly id: string;
    readonly name: string;
    index: number;
}

export interface IChannelStateProps {
    readonly channel: IChannel;
}

export interface IChannelDispatchProps {
    showEditChannel: (id: string) => void
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
            <div key={index}>
                <div
                  className="channel-name"
                >{channel.name}
                </div>
                <Button
                  bsStyle="info"
                  onClick={this.props.showEditChannel}
                >
                    <Glyphicon glyph="edit"/>
                </Button>
            </div>
      );
    }
}

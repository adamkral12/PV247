import * as React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import {IChannel} from "../models/IChannel";

export interface IChannelOwnProps {
    readonly id: string;
}

export interface IChannelStateProps {
    readonly channel: IChannel;
}

export interface IChannelDispatchProps {

}

export class Channel extends React.PureComponent<IChannelOwnProps & IChannelStateProps & IChannelDispatchProps> {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteChannelModal: false
    };
  }

    showDeleteChannelModal = () => {
      this.setState({ showDeleteChannelModal: true });
    };

    render() {
      return (
            <div>
                <div
                  className="channel-name"
                >
                </div>
                <Button
                  bsStyle="danger"
                  onClick={this.showDeleteChannelModal}
                >
                    <Glyphicon glyph="remove"/>
                </Button>
            </div>
      );
    }
}

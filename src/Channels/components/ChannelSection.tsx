import * as React from 'react';
import * as Immutable from 'immutable';
import { ListGroup, Panel } from 'react-bootstrap';
import './ChannelSection.css';
import {IChannel} from '../models/IChannel';
import {ChannelContainer} from '../containers/Channel';

export interface IProps {
    readonly channels: Immutable.List<IChannel>;
}
export class ChannelSection extends React.PureComponent<IProps> {
    render() {
      return (
            <div>
                <Panel.Body>
                    <ListGroup>
                        {this.props.channels.map((channel: IChannel, index: number) => {
                          return (
                              <ChannelContainer
                                  id={channel.id}
                                  index={index}
                                  key={channel.id}
                                  channel={channel}
                              />
                          );
                        })}
                    </ListGroup>
                </Panel.Body>
            </div>
      );
    }
}

import * as React from 'react';
import * as Immutable from 'immutable';
import { ListGroup, Panel } from 'react-bootstrap';
import './ChannelSection.css';
import {ChannelContainer} from '../containers/Channel';

export interface IChannelSectionStateProps {
    readonly channelIds: Immutable.List<string>;
}
export class ChannelSection extends React.PureComponent<IChannelSectionStateProps> {
    render() {
      return (
            <div>
                <Panel.Body>
                    <ListGroup>
                        {this.props.channelIds.map((id: string, index: number) => {
                          return (
                              <ChannelContainer
                                  id={id}
                                  key={id}
                                  index={index + 1}
                              />
                          );
                        })}
                    </ListGroup>
                </Panel.Body>
            </div>
      );
    }
}

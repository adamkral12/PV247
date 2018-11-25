import * as React from 'react';
import * as Immutable from 'immutable';
import { ListGroup, Panel } from 'react-bootstrap';
import './ChannelSection.css';
import {ChannelContainer} from '../containers/Channel';
import {ChannelFilterContainer} from '../containers/ChannelFilter';
import {ScaleLoader} from 'react-spinners';

export interface IChannelSectionStateProps {
    readonly channelIds: Immutable.List<string>;
    readonly isLoading: boolean;
    readonly errorMessage?: string;
}
export class ChannelSection extends React.PureComponent<IChannelSectionStateProps> {
    render() {
        if (this.props.isLoading) {
            return (
                <Panel.Body>
                    <div className="col-sm-12 text-center">
                        <ScaleLoader/>
                    </div>
                </Panel.Body>
            );
        }

        if (this.props.errorMessage) {
            return (
                <Panel.Body>
                    <div className="col-sm-12 text-center">
                        Could not load channels: {this.props.errorMessage}
                    </div>
                </Panel.Body>
            );
        }

        return (
          <Panel.Body>
              <ChannelFilterContainer/>
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
      );
    }
}

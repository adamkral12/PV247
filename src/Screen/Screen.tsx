import * as React from 'react';
import {BodyWrapper} from './Body/BodyWrapper';

export class Screen extends React.PureComponent {
  render() {
    return (
            <div>
                <BodyWrapper
                  // user={this.props.user}
                  // messages={this.props.messages}
                />
            </div>
    );
  }
}

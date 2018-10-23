import * as React from 'react';
import {MessageBoardContainer} from '../../Messages/containers/MessageBoard';

export class BodyWrapper extends React.PureComponent {
  render() {
    return (
            <div>
                <MessageBoardContainer/>
            </div>
    );
  }
}

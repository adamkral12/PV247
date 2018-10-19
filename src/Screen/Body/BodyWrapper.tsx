import * as React from 'react';
import {MessageBoard} from "./Messages/components/MessageBoard";

export class BodyWrapper extends React.PureComponent {
  render() {
    return (
            <div>
                <MessageBoard/>
            </div>
    );
  }
}

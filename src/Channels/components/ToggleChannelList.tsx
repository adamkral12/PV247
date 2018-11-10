import * as React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './ToggleChannelList.less';

export interface IToggleChannelListDispatchProps {
    readonly showChannelList: () => void;
}

export class ToggleChannelList extends React.PureComponent<IToggleChannelListDispatchProps> {
    render() {
        return (
            <div
                onClick={this.props.showChannelList}
                className="toggle-channel-list"
            ><Glyphicon glyph="chevron-right"/></div>
        );
    }
}

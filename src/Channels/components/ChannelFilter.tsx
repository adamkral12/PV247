import * as React from 'react';
import {FormControl} from 'react-bootstrap';
import './ChannelFilter.less';

export interface IChannelFilterDispatchProps {
    readonly onFilterTextChange: (value: string) => void;
}

export interface IChannelFilterStateProps {
    readonly text;
}

export class ChannelFilter extends React.PureComponent<IChannelFilterDispatchProps & IChannelFilterStateProps> {
    private onFilterTextChange = (event: React.FormEvent<HTMLInputElement>) => {
        const filterText = event.currentTarget.value;
        this.props.onFilterTextChange(filterText);
    };

    render() {
        return (
            <div className="channel-filter">
                <FormControl
                    type="text"
                    value={this.props.text}
                    placeholder="Search for channel"
                    onChange={this.onFilterTextChange}
                />
            </div>
        );
    }
}

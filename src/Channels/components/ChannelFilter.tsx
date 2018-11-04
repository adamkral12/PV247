import * as React from 'react';
import {FormControl} from 'react-bootstrap';
import './ChannelFilter.less';

export interface IChannelFilterDispatchProps {
    readonly onFilterTextChange: (value: string) => void;
}

interface IState {
    readonly filterText: string;
}

export class ChannelFilter extends React.PureComponent<IChannelFilterDispatchProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
        };
    }

    private onFilterTextChange = (event: React.FormEvent<HTMLInputElement>) => {
        const filterText = event.currentTarget.value;
        this.setState(_ => ({ filterText } ));
        this.props.onFilterTextChange(filterText);
    };

    render() {
        return (
            <div className="channel-filter">
                <FormControl
                    type="text"
                    value={this.state.filterText}
                    placeholder="Search for channel"
                    onChange={this.onFilterTextChange}
                />
            </div>
        );
    }
}

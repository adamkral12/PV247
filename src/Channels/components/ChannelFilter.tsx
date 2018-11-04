import * as React from 'react';

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
        }
    }
    private onFilterTextChange = (event: React.FormEvent<HTMLInputElement>) => {
        console.log("co do pice");
        console.log(event.currentTarget.value);
        this.setState(_ => ({ filterText: event.currentTarget.value} ));
        this.props.onFilterTextChange(event.currentTarget.value);
    };

    render() {
        return(
            <form className="form-inline">
                <input
                    type="text"
                    style={{"color": "black"}}
                    onChange={this.onFilterTextChange}
                    value={this.state.filterText}
                />
            </form>
        );
    }
}

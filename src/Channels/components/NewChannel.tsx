import * as React from 'react';

export interface NewChannelProps {
    readonly onAddChannel: () => void;
}

export class NewChannel extends React.PureComponent<NewChannelProps> {
    private onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        this.props.onAddChannel();
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form-inline">
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Create new channel</button>
                </div>
            </form>
        );
    }
}

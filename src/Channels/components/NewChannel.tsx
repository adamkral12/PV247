import * as React from 'react';

export interface IState {
    readonly value: string;
}

export interface IProps {
    readonly onAddChannel: (name: string) => void;
}

export class NewChannel extends React.PureComponent<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    private onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        this.props.onAddChannel(this.state.value);

        this.setState(_ => ({ value: '' }));
    };

    private onValueChanged = (event: React.FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        this.setState(_ => ({ value }));
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form-inline">
                <div className="form-group">
                    <div className="input-group">
                        <label htmlFor="new-todo" className="sr-only">New todo:</label>
                        <input
                            id="new-todo"
                            value={this.state.value}
                            onChange={this.onValueChanged}
                            className="form-control"
                            placeholder="Buy milk..."
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        );
    }
}

import * as React from 'react';
import {IChannel} from "../models/IChannel";
import {IChannelCustomData} from "../models/IChannelCustomData";

interface IProps {
    readonly onSave: (name: string, customData: IChannelCustomData) => void;
    readonly channel: IChannel;
    readonly onDelete: (id: string) => void;
    readonly onCancel: () => void;
}

interface IState {
    readonly value: string;
}

export class ChannelEdit extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            value: props.channel.name
        }
    }

    private onSave = (event: React.FormEvent) => {
        event.preventDefault();
        this.props.onSave(this.state.value, {customData: {}});
        this.setState(_ => ({ value: '' }))
    };

    private onValueChanged = (event: React.FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        this.setState( _ => ({ value }));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSave}>
                    <input
                        value={this.state.value}
                        onChange={this.onValueChanged}
                        className="form-control"
                    />
                    <button type="submit" className="btn btn-primary">Save</button>
                    <button type="button" className="btn btn-default" onClick={this.props.onCancel}>Cancel</button>
                </form>
            </div>
        );
    }
}

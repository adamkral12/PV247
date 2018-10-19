import * as React from 'react';
// import {IChannelCustomData} from "../models/IChannelCustomData";
// import {IChannel} from "../models/IChannel";
// import {ChannelEdit} from "./ChannelEdit";
import {ChannelDisplay} from "./ChannelDisplay";
// import {IState} from "../../common/IState";

// export interface IChannelOwnProps {
//     readonly id: string;
//     readonly index: number;
// }

export interface IChannelItemStateProps {
    readonly name: string;
}

export interface IChannelDispatchProps {
    // readonly onEdit: (name: string, customData: IChannelCustomData) => void;
    // readonly onDelete: (name: string) => void;
    // readonly onToggle: () => void;
    // readonly onStartEditing: () => void;
    // readonly onCancelEditing: () => void;
}

// type IProps =  IChannelItemStateProps & IChannelDispatchProps;

export class Channel extends React.PureComponent<IChannelItemStateProps, IChannelDispatchProps> {
    render() {
        console.log("channel component");
        console.log(this.props);
        const { name } = this.props;

        return (
            <div key={1}>
                {/*{isBeingEdited ? <ChannelEdit channel={channel} onSave={this.props.onEdit} onCancel={this.props.onCancelEditing} onDelete={this.props.onDelete}/>*/}
                <ChannelDisplay
                    name={name}
                    // onClick={this.props.onStartEditing}
                    // onToggle={this.props.onToggle}
                />
                }
            </div>
      );
    }
}

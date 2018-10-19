import * as React from 'react';
// import {IChannel} from "../models/IChannel";

interface IProps {
    readonly name: string;
    // readonly onClick?: () => void;
    // readonly onToggle: () => void;
}

export const ChannelDisplay: React.SFC<IProps> = ({ name }) => (
    <>
        <div className=""
             // onClick={onClick}
        >{name}</div>
        <div className=""
             // onClick={onToggle}
            >
            deleteasi
    </div>
    </>
);

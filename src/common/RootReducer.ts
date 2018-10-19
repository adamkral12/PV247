import {IState} from "./IState";
import {channelApp} from "../Channels/reducers/channelApp";

export const RootReducer = (prevState = {} as IState, action: Action): IState => ({
    channelApp: channelApp(prevState.channelApp, action)
});

import * as React from 'react';
// import { Col } from 'react-bootstrap';
import { createStore } from "redux";
import { Provider } from "react-redux";
// import Screen from "./Screen/Screen";
// import { HeaderWrapper } from "./Screen/Header/HeaderWrapper";
import { RootReducer } from "./common/RootReducer";
// import { ChannelAppContainer } from "./Channels/containers/ChannelApp";
import {getInitialState} from "./Channels/utils/getInitialItems";
import {ChannelContainer} from "./Channels/containers/Channel";
import {Channel} from "./Channels/components/Channel";


const initialState = {
    name: "hello"
};
const store = createStore(RootReducer, initialState);
//
// const data = {
//     user: "user",
//     channelMessages: []
// };

export class App extends React.PureComponent {
    render() {
      return (
          <Provider store={store}>
              <div className="App">
                  {/*<HeaderWrapper/>*/}
                  <ChannelContainer/>
                  {/*<ChannelAppContainer/>*/}
                  {/*<Col xs={10}>*/}
                      {/*<Screen*/}
                        {/*user={data.user}*/}
                        {/*messages={data.channelMessages}*/}
                      {/*/>*/}
                  {/*</Col>*/}
              </div>
          </Provider>
      );
    }
}

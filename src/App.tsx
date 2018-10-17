import * as React from 'react';
import { Col } from 'react-bootstrap';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { CHANNELS_DATA } from "./utils/exportData";
import Screen from "./Screen/Screen";
import { HeaderWrapper } from "./Screen/Header/HeaderWrapper";
import { RootReducer } from "./common/RootReducer";
import { ChannelAppContainer } from "./Channels/containers/ChannelApp";

const initialState = {
  channelList: CHANNELS_DATA
};

const store = createStore(RootReducer, initialState);

const data = {
    user: "user",
    channelMessages: []
};

export class App extends React.PureComponent {
    onChannelClick = (channelId) => {
      console.log("Event bubbled into top component, channel id = " + channelId);
    };

    render() {
      return (
          <Provider store={store}>
              <div className="App">
                  <HeaderWrapper/>
                  <ChannelAppContainer/>
                  <Col xs={10}>
                      <Screen
                        user={data.user}
                        messages={data.channelMessages}
                      />
                  </Col>
              </div>
          </Provider>
      );
    }
}

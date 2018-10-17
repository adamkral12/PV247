import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ChannelWrapper from './Channels/ChannelWrapper';
import data from './tests/mockData.json';
import Screen from "./Screen/Screen";
import HeaderWrapper from "./Screen/Header/HeaderWrapper";

class App extends Component {
    onChannelClick = (channelId) => {
      console.log("Event bubbled into top component, channel id = " + channelId);
    };

    render() {
      return (
      <div className="App">
          <HeaderWrapper
            user={data.user}
          />
          <ChannelWrapper
            channels={data.channels}
            onChannelClick={(channelId) => this.onChannelClick(channelId)}
          />
          <Col xs={8} sm={10}>
            <Screen
              user={data.user}
              messages={data.channelMessages}
            />
          </Col>
      </div>
      );
    }
}

export default App;

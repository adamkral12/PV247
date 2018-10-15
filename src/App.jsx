import React, { Component } from 'react';
import ChannelWrapper from './Channels/ChannelWrapper';
import data from './tests/mockData.json';
import Screen from "./Screen/Screen";
import HeaderWrapper from "./Screen/Header/HeaderWrapper";
import { Col } from 'react-bootstrap';

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
          <Col xs={10}>
            <Screen
              messages={data.channelMessages}
            />
          </Col>
      </div>
      );
    }
}

export default App;

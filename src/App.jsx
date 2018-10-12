import React, { Component } from 'react';
import ChannelWrapper from './Channels/ChannelWrapper';
import data from './tests/mockData.json';
import Screen from "./Screen/Screen"; // mock data

class App extends Component {
    onChannelClick = (channelId) => {
      console.log("Event bubbled into top component, channel id = " + channelId);
    };

    render() {
      return (
      <div className="App">
          <div className="col-xs-3">
          <ChannelWrapper
            channels={data.channels}
            onChannelClick={(channelId) => this.onChannelClick(channelId)}
          />
          </div>
          <div className="col-xs-9">
            <Screen
                messages={data.channelMessages}
            />
          </div>
      </div>
      );
    }
}

export default App;

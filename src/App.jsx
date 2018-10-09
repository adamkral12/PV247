import React, { Component } from 'react';
import ChannelWrapper from './Channels/ChannelWrapper';
import data from './tests/mockData.json';
import Screen from "./Screen/Screen"; //mock data

class App extends Component {
  render() {
    return (
      <div className="App">
          <ChannelWrapper
              data={data.channels}
          />
        <Screen/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ChannelWrapper from './Channels/ChannelWrapper';
import data from './tests/mockData.json';
import Screen from "./Screen/Screen"; //mock data

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="col-xs-3">
          <ChannelWrapper
              data={data.channels}
          />
          </div>
          <div className="col-xs-9">
            <Screen/>
          </div>
      </div>
    );
  }
}

export default App;

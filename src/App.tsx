import * as React from 'react';
import { Col } from 'react-bootstrap';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {CHANNEL_MESSAGES_DATA, CHANNELS_DATA, USER_DATA, USERS_DATA} from './utils/exportData';
import { Screen } from './Screen/Screen';
import { RootReducer } from './common/RootReducer';
import { ChannelAppContainer } from './Channels/containers/ChannelApp';
import {IChannel} from './Channels/models/IChannel';
import * as Immutable from 'immutable';
import {IUser} from './Channels/models/IUser';
import {IState} from './common/IState';
import {IMessage} from './Messages/model/IMessage';
import {HeaderContainer} from "./Header/containers/ChannelName";

const initialState: IState = {
  channelList: {
      channels: Immutable.List<IChannel>(CHANNELS_DATA),
      users: Immutable.List<IUser>(USERS_DATA),
      showEditModal: {
          editedChannelId: null,
          showEditChannelModal: false
      },
      selectedChannelId: null,
  },
    messageApp: {
      messages: Immutable.List<IMessage>(CHANNEL_MESSAGES_DATA),
        user: USER_DATA,
    }
};

console.log(initialState);
const store = createStore(RootReducer, initialState);

export class App extends React.PureComponent {
    render() {
      return (
          <Provider store={store}>
              <div className="App">
                  <HeaderContainer/>
                  <ChannelAppContainer/>
                  <Col xs={10}>
                      <Screen
                        // user={data.user}
                        // messages={data.channelMessages}
                      />
                  </Col>
              </div>
          </Provider>
      );
    }
}

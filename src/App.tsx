import * as React from 'react';
import { Col } from 'react-bootstrap';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import {CHANNEL_MESSAGES_DATA, USER_DATA, USERS_DATA} from './utils/exportData';
import { Screen } from './Screen/Screen';
import { RootReducer } from './common/RootReducer';
import { ChannelAppContainer } from './Channels/containers/ChannelApp';
import * as Immutable from 'immutable';
import {IUser} from './Channels/models/IUser';
import {IState} from './common/IState';
import {IMessage} from './Messages/model/IMessage';
import {HeaderContainer} from './Header/containers/Header';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {ChannelFilterEnum} from './Channels/constants/ChannelFilterEnum';


const initialState: IState = {
  channelList: {
      visibilityFilter: {
          filter: ChannelFilterEnum.All,
          text: '',
      },
      channels: {
          allIds: Immutable.List(),
          byId: Immutable.Map(),
      },
      users: Immutable.List<IUser>(USERS_DATA),
      showEditModal: {
          editedChannelId: null,
          showEditChannelModal: false
      },
      selectedChannelId: '1',
  },
    messageApp: {
        messages: {
            allIds: Immutable.List<Uuid>(CHANNEL_MESSAGES_DATA.map((item: IMessage) => item.id)),
            byId: Immutable.Map(CHANNEL_MESSAGES_DATA.map((item: IMessage) => [item.id, item])),
        },
    },
    userApp: {
      user: USER_DATA,
        showEditModal: false,
    }
};

const middleware = [thunk];

const store = createStore(
    RootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);

export class App extends React.PureComponent {
    render() {
      return (
          <Provider store={store}>
              <div className="App">
                  <ChannelAppContainer/>
                  <HeaderContainer/>
                  <Col md={9} sm={9} xs={12}>
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

import * as React from 'react';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import {CHANNEL_MESSAGES_DATA, USERS_DATA} from './utils/exportData';
import { RootReducer } from './common/RootReducer';
import * as Immutable from 'immutable';
import {IUser} from './Channels/models/IUser';
import {IState} from './common/IState';
import {IMessage} from './Messages/model/IMessage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {AuthenticationContainer} from './Authentication/containers/Authentication';

const initialState: IState = {
  channelList: {
      visibilityFilter: {
          text: '',
      },
      channels: {
          allIds: Immutable.List(),
          byId: Immutable.Map(),
      },
      users: Immutable.List<IUser>(USERS_DATA),
      editedChannelModal: {
          editedChannelId: null,
          showEditChannelModal: false
      },
      selectedChannelId: '1',
      showChannelList: false,
  },
    messageApp: {
        messages: {
            allIds: Immutable.List<Uuid>(CHANNEL_MESSAGES_DATA.map((item: IMessage) => item.id)),
            byId: Immutable.Map(CHANNEL_MESSAGES_DATA.map((item: IMessage) => [item.id, item])),
        },
        editedMessageId: null,
    },
    userApp: {
      userEmail: '',
        showEditUserModal: false,
        users: {
            allIds: Immutable.List<Uuid>(USERS_DATA.map((item: IUser) => item.email)),
            byId: Immutable.Map(USERS_DATA.map((item: IUser) => [item.email, item])),
        },
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
                  <AuthenticationContainer/>
              </div>
          </Provider>
      );
    }
}

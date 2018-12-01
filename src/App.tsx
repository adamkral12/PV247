import * as React from 'react';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import { RootReducer } from './common/RootReducer';
import * as Immutable from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {AuthenticationContainer} from './Authentication/containers/Authentication';
import {IUser} from './Channels/models/IUser';
import {USERS_DATA} from './utils/exportData';

const initialState = {
    authenticationApp: {
        isLoggedIn: false,
        showRegistrationModal: false,
        showLoginModal: false,
    },
  channelList: {
      visibilityFilter: {
          text: '',
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
        },
        editedMessageId: null,
    },
    userApp: {
        showEditUserModal: false,
        users: {
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

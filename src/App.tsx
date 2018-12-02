import * as React from 'react';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import { RootReducer } from './common/RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {AuthenticationContainer} from './Authentication/containers/Authentication';
const middleware = [thunk];

const store = createStore(
    RootReducer,
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

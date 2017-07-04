import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const history = createBrowserHistory();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.querySelector('#app'));

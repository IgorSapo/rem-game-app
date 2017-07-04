import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const history = createBrowserHistory();
const store = createStore(
  (state ={}) => state, // reducer
  applyMiddleware(thunk) // middleware
);

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.querySelector('#app'));

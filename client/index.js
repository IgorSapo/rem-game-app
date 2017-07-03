import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes';

const history = createBrowserHistory();

const Root = () => (
  <Router history={history}>
    {routes}
  </Router>
)

ReactDOM.render(<Root />, document.querySelector('#app'));

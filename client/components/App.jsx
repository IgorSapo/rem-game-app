import React from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Greetings from './Greetings';
import SignUpPage from './signup/SignUpPage';
import FlashMessagesList from './flash/FlashMessagesList';
import LoginPage from './login/LoginPage';
import NewEventPage from './events/NewEventPage';
import requireAuth from '../utils/requireAuth';

const App = ({ match }) => (
  <div className='container'>
    <NavigationBar />
    <FlashMessagesList />
    <Route exact path={'/'} component={Greetings} />
    <Route exact path={'/signup'} component={SignUpPage} />
    <Route exact path={'/login'} component={LoginPage} />
    <Route exact path={'/new-event'} component={requireAuth(NewEventPage)} />
  </div>
)

export default App;

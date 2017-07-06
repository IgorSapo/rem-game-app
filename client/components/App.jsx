import React from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Greetings from './Greetings';
import SignUpPage from './signup/SignUpPage';
import FlashMessagesList from './flash/FlashMessagesList';
import LoginPage from './login/LoginPage';

const App = ({ match }) => (
  <div className='container'>
    <NavigationBar />
    <FlashMessagesList />
    <Route exact path={'/'} component={Greetings} />
    <Route exact path={'/signup'} component={SignUpPage} />
    <Route exact path={'/login'} component={LoginPage} />
  </div>
)

export default App;

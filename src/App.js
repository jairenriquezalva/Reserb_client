import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import 'App.css'

import routes from 'routes'

import Header from 'components/header/Header'
import Profile from 'pages/Profile'
import Home from 'pages/Home';
import Login from 'pages/Login';
import Signup from 'pages/Signup';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={routes.home}><Home/></Route>
        <Route path={routes.profile}><Profile/></Route>
        <Route path={routes.signup}><Signup/></Route>
        <Route path={routes.login}><Login/></Route>
      </Switch>
    </Router>
  );
}

export default App;

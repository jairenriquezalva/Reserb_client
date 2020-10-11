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
import Sector from 'pages/Sector';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import Category from 'pages/Category';
import Space from 'pages/Space'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={routes.home}><Sector/></Route>
        <Route path={routes.profile}><Profile/></Route>
        <Route path={routes.signup}><Signup/></Route>
        <Route path={routes.category+'/:sectorId'}><Category/></Route>
        <Route path={routes.space+'/:categoryId'}><Space/></Route>
        <Route path={routes.login}><Login/></Route>
      </Switch>
    </Router>
  );
}

export default App;

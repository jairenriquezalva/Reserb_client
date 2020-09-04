import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import 'App.css'

import routes from 'routes'

import Header from 'Header'
import Home from 'pages/Home';
import Login from 'pages/Login';
import Signup from 'pages/Signup';

function App() {
  const headerHeight = 120;
  const bodyHeight = window.innerHeight-headerHeight;
  return (
    <Router>
      <Header height={headerHeight}/>
      <Switch>
        <Route path={routes.home}><Home/></Route>
        <Route path={routes.signup}><Signup height={bodyHeight}/></Route>
        <Route path={routes.login}><Login height={bodyHeight}/></Route>
      </Switch>
    </Router>
  );
}

export default App;

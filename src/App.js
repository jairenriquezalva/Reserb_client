import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import 'App.css'

import routes from 'routes'

import Header from 'Header'
import Home from 'Home';
import Login from 'Login';
import Signup from 'Signup';

function App() {
  const headerHeight = 120;
  return (
    <Router>
      <Header height={headerHeight}/>
      <Switch>
        <Route path={routes.home}><Home height={window.innerHeight-headerHeight}/></Route>
        <Route path={routes.signup}><Signup height={window.innerHeight-headerHeight}/></Route>
        <Route path={routes.login}><Login height={window.innerHeight-headerHeight}/></Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import routes from 'routes'
import Home from 'Home';
import Login from 'Login';
import Signup from 'Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={routes.home}><Home/></Route>
        <Route path={routes.signup}><Signup/></Route>
        <Route path={routes.login}><Login/></Route>
      </Switch>
    </Router>
  );
}

export default App;

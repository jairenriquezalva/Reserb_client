import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from 'Home';
import Login from 'Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home"><Home/></Route>
        <Route path="/"><Login/></Route>
      </Switch>
    </Router>
  );
}

export default App;

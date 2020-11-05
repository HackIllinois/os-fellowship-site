import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Auth from 'pages/Auth';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/auth" exact>
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

import Home from 'pages/Home';
import Auth from 'pages/Auth';

function App(): JSX.Element {
  const location = useLocation();
  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);

    // temp
    const query = new URLSearchParams(location.search);
    document.body.style.setProperty('--lheight', `${query.get('line-height')}em`);
  }, [location]);

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/auth" exact>
        <Auth />
      </Route>

      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;

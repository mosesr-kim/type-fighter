import React, { useEffect, useState } from 'react';
import Home from './pages/home';
import Lobby from './pages/lobby';
import Fight from './pages/fight';
import { styled } from '@material-ui/core';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import RouterContext from './lib/router-context';
import UserContext from './lib/user-context';

const BGContainer = styled('div')(() => ({
  position: 'relative'
}));

const BGImage = styled('img')(() => ({
  display: 'block',
  minWidth: '100%',
  maxHeight: '100vh',
  minHeight: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -2
}));

const BGOverlay = styled('div')(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  minWidth: '100%',
  minHeight: '100vh',
  zIndex: -1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)'
}));

export default function App() {
  const [user, setUser] = useState(null);
  const [isAuthorizing, setIsAuthorizing] = useState(true);
  const history = useHistory();

  useEffect(() => {
    fetch('/api/user')
      .then(result => result.json())
      .then(userInfo => {
        setUser(userInfo);
        setIsAuthorizing(false);
      });
  }, []);

  if (isAuthorizing) return null;

  return (
    <RouterContext.Provider value={{ history }}>
      <BGContainer>
        <BGOverlay />
        <BGImage src="sf2background.png" alt="street fighter 2 background" />
      </BGContainer>

      <UserContext.Provider value={user}>
        <Switch>
          <Route path="/lobby" >
            {user ? <Lobby /> : <Redirect to="/" />}
          </Route>
          <Route path="/fight" >
            {user ? <Fight /> : <Redirect to="/" />}
          </Route>
          <Route path="/" >
            {user ? <Redirect to="/lobby" /> : <Home />}
          </Route>
        </Switch>
      </UserContext.Provider>
    </RouterContext.Provider>
  );
}

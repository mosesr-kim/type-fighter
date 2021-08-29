import React from 'react';
import Home from './pages/home';
import Lobby from './pages/lobby';
import Fight from './pages/fight';
import { styled } from '@material-ui/core';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import RouterContext from './lib/router-context';

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

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const history = useHistory();

  return (
    <RouterContext.Provider value={{ history }}>
      <BGContainer>
        <BGOverlay />
        <BGImage src="sf2background.png" alt="street fighter 2 background" />
      </BGContainer>

      <Switch>
        <Route path="/lobby" >
          <Lobby />
        </Route>
        <Route path="/fight" >
          <Fight />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </RouterContext.Provider>
  );
}

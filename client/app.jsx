import React, { useEffect, useState } from 'react';
import { Home, Game, Lobby, Fight } from './pages';
import { styled } from '@material-ui/core';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import RouterContext from './lib/router-context';
import UserContext from './lib/user-context';
import SoundContext from './lib/sound-context';
import BGM from './components/bgm';

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
  const [sound, setSound] = useState(true);
  const [music, setMusic] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetch('/api/user')
      .then(result => result.json())
      .then(userInfo => {
        setUser(userInfo);
        setIsAuthorizing(false);
      });
  }, []);

  if (isAuthorizing) return null;

  const backgroundImage = location.pathname !== '/'
    ? (
      <BGContainer>
        <BGOverlay />
        <BGImage src="/sf2background.png" alt="street fighter 2 background" />
        <BGM />
      </BGContainer>
      )
    : null;

  const noScroll = location.pathname !== '/'
    ? 'no-scroll'
    : '';

  return (
    <div className={noScroll}>
      <RouterContext.Provider value={{ history }}>
        <SoundContext.Provider value={{ sound, setSound, music, setMusic }}>
          {backgroundImage}

          <UserContext.Provider value={{ user, setUser }}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/game/lobby" >
                {user.userId ? <Lobby /> : <Redirect to="/game" />}
              </Route>
              <Route path="/game/fight" >
                {user.userId ? <Fight /> : <Redirect to="/game" />}
              </Route>
              <Route path="/game" >
                {user.userId ? <Redirect to="/game/lobby" /> : <Game />}
              </Route>
            </Switch>
          </UserContext.Provider>
        </SoundContext.Provider>
      </RouterContext.Provider>
    </div>
  );
}

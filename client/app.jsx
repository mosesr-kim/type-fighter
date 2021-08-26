import React from 'react';
// import Home from './pages/home';
// import Fight from './pages/fight';
import Lobby from './pages/lobby';
import { styled } from '@material-ui/core';

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
  return (
    <>
      <BGContainer>
        <BGOverlay />
        <BGImage src="sf2background.png" alt="street fighter 2 background" />
      </BGContainer>
      <Lobby />
    </>
  );
}

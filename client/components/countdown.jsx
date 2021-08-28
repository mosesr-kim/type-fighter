import React, { useState } from 'react';
import { styled } from '@material-ui/core';

const CountdownContainer = styled('div')({
  pointerEvents: 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const CountdownText = styled('div')({
  fontFamily: 'retro, sans-serif',
  fontSize: '5rem',
  color: 'white'
});

export default function Countdown(props) {
  if (!props.counting) {
    return <></>;
  }

  const text = ['3', '2', '1', 'Type!'];
  const [counter, setCounter] = useState(0);

  setTimeout(() => {
    setCounter(prev => prev === 3 ? 0 : prev + 1);
  }, 1000);

  return (
    <CountdownContainer>
      <CountdownText>{text[counter]}</CountdownText>
    </CountdownContainer>
  );
}

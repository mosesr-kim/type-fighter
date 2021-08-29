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
  /* In Outer Function
  const [counting, setCounting] = useState(true);

  function removeCountdown() {
    setCounting(false);
  }

  <Countdown counting={counting} removeCountdown={removeCountdown} />
  */

  const { counting, removeCountdown } = props;
  if (!counting) {
    return <></>;
  }

  const text = ['3', '2', '1', 'Type!'];
  const [counter, setCounter] = useState(0);

  setTimeout(() => {
    if (counter === 3) {
      removeCountdown();
    } else {
      setCounter(counter + 1);
    }
  }, 1000);

  return (
    <CountdownContainer>
      <CountdownText>{text[counter]}</CountdownText>
    </CountdownContainer>
  );
}

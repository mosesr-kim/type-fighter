import React, { useState } from 'react';
import { Grid, styled, Fade } from '@material-ui/core';
import TypingGame from '../components/typing-game';

const TextBox = styled('div')({
  border: '3px solid white',
  width: '35vw',
  maxWidth: '500px',
  position: 'relative'
});

const TypeText = styled('div')({
  fontFamily: 'retro, sans-serif',
  fontSize: '1.75rem',
  color: 'white',
  margin: '0.5rem'
});

const BlurBox = styled('div')({
  minWidth: '100%',
  minHeight: '100%',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  position: 'absolute',
  pointerEvents: 'none'
});

const BlurMessage = styled('div')({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  top: '50%',
  left: '50%',
  fontFamily: 'retro, sans-serif',
  color: 'red'
});

export default function TypingBox(props) {
  const [isFocused, setIsFocused] = useState(false);

  const focusText = () => {
    setIsFocused(true);
  };

  const blurText = () => {
    setIsFocused(false);
  };

  return (
    <TextBox>
      <Grid container className="text-box">
        <Fade in={!isFocused}>
          <BlurBox>
            <BlurMessage>{`
            Click on Text
            or Press Tab
            `}</BlurMessage>
          </BlurBox>
        </Fade>
        <Grid item>
          <TypeText>
            <TypingGame
              text={props.text}
              isFocused={isFocused}
              onFocus={focusText}
              onBlur={blurText}
            />
          </TypeText>
        </Grid>
      </Grid>
    </TextBox>
  );
}

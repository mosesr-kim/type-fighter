import React, { useState } from 'react';
import { Grid, styled } from '@material-ui/core';
import TypingGame from '../components/typing-game';

const TextBox = styled('div')({
  border: '3px solid white',
  width: '90vw',
  height: '10rem'
});

const TypeText = styled('div')({
  fontFamily: 'retro, sans-serif',
  fontSize: '1.75rem',
  color: 'white',
  margin: '0.5rem'
});

export default function TypingBox(props) {
  const [isFocused, setIsFocused] = useState(true);

  const focusText = () => {
    setIsFocused(true);
  };

  const blurText = () => {
    setIsFocused(false);
  };

  return (
    <TextBox>
      <Grid container className="text-box" onFocus={focusText} onBlur={blurText}>
        <Grid item>
          <TypeText>
            <TypingGame text={props.text} isFocused={isFocused} />
          </TypeText>
        </Grid>
      </Grid>
    </TextBox>
  );
}

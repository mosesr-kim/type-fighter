import React from 'react';
import { Grid, styled } from '@material-ui/core';
import TypingGame from '../components/typing-game';

const TextBox = styled('div')({
  border: '3px solid white',
  width: '90vw'
});

const TypeText = styled('div')({
  fontFamily: 'retro, sans-serif',
  fontSize: '1.75rem',
  color: 'white',
  margin: '0.5rem'
});

export default function TypingBox(props) {
  return (
    <TextBox>
      <Grid container className="text-box">
        <Grid item>
          <TypeText>
            <TypingGame text={props.text} />
          </TypeText>
        </Grid>
      </Grid>
    </TextBox>
  );
}

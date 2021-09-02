import React from 'react';
import { Grid, styled } from '@material-ui/core';

const Gif = styled('img')({
  maxWidth: '100%'
});

export default function HowToPlay(props) {
  return (
    <Grid container>
      <Grid item sm={6}>
        <Gif src="/media/creating-user.gif" alt="creating user gif" />
      </Grid>
      <Grid item sm={6}>
        <Grid container>
          <Grid container direction='column'>
            <Grid item>
              <h2>How to play</h2>
            </Grid>
            <Grid item>
              <p>&#8226; Enter your username and select your character.</p>
              <p>&#8226; Join an existing game by clicking JOIN GAME, or challenge others by clicking POST A GAME.</p>
              <p>&#8226; Once a game begins, press TAB to being typing.</p>
              <p>&#8226; Whoever finishes typing the phrase first wins the chance to attack their opponent.</p>
              <p>&#8226; Last man standing wins!</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

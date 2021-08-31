import React from 'react';
import GameForm from '../components/game-form';
import { Grid } from '@material-ui/core';

export default function Game(props) {
  return (
    <>
      <Grid container justifyContent="center" alignContent="center">
        <Grid item>
          <GameForm />
        </Grid>
      </Grid>
    </>
  );
}

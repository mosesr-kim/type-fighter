import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

export default function AboutTheGame(props) {
  return (
    <Grid container>
      <Grid item sm={6}>
        <Grid container>
          <Grid item>
            <Typography variant="h3">Type Fighter</Typography>
            <Typography variant="body1">
              Type Fighter allows you to put your typing skills to the
              test against other players in a real-time, online
              experience. Race to complete a phrase before your
              opponent to deal damage and eventually defeat your
              opposition.
            </Typography>
          </Grid>
          <Grid item>
          </Grid>
          <Grid item>
            <RouterLink to="/game">
              <button>Play</button>
            </RouterLink>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={6}>
        <Grid container>
          <p>Gif Here</p>
        </Grid>
      </Grid>
    </Grid>
  );
}

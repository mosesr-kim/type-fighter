import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link } from '@material-ui/core';

export default function NavBar(props) {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Link to="/">
          Home
        </Link>
      </Grid>
      <Grid item>
        <Link to="/game">
          <button>About the game</button>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/game">
          <button>Meet the developers</button>
        </Link>
      </Grid>
    </Grid>
  );
}

/*
<Grid item>
  <Link to="/game">
    <button>Play</button>
  </Link>
</Grid>
*/

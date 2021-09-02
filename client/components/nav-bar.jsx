import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link } from '@material-ui/core';

export default function NavBar(props) {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Link component={RouterLink} to="/">
          Home
        </Link>
      </Grid>
      <Grid item>
        <Link component={RouterLink} to="#about-game">
          About the Game
        </Link>
      </Grid>
      <Grid item>
        <Link component={RouterLink} to="#meet-devs">
          Meet the Developers
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

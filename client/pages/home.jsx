import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

export default function Home(props) {
  return (
    <Grid container style={{ maxWidth: '1080px', margin: '0 auto ', justifyContent: 'space-between' }}>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Link to="/game">
              <button>Home</button>
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
      </Grid>
      <Grid item>
        <Grid item>
          <Link to="/game">
            <button>Play</button>
          </Link>
        </Grid>
      </Grid>

      {/* <Grid item>
        <Grid container>

        </Grid>
        <Grid container>

        </Grid>
      </Grid> */}
    </Grid>
  );
}

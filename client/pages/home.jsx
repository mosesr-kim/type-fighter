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
        <Link to="/game">
          <button>Play</button>
        </Link>
      </Grid>

      <Grid item>
        <Grid container>
          <Grid item xs={6}>
            <Grid container direction='column'>
              <Grid item>
                <h2>Type Fighter</h2>
              </Grid>
              <Grid item>
                <p>
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Aliquam at velit urna. Nam ex ligula, elementum eget viverra sit
                  amet, efficitur a tortor. Integer tristique egestas euismod.
                  Fusce sed risus ac urna mollis pellentesque. Sed et lacinia lectus.
                  Cras dapibus lacinia ligula, sit amet ullamcorper metus sodales non.
                  Maecenas fringilla erat ut eros consequat vestibulum. Ut porta sit
                  amet felis eu imperdiet. Sed id leo ligula.
                </p>
              </Grid>
              <Grid item>
                <Link to="/game">
                  <button>Play</button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <p>Gif Here</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

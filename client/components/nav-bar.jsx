import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link } from '@material-ui/core';
import PlayButton from '../components/play-button';
import MyTypography from './my-typography';

export default function NavBar(props) {
  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Link component={RouterLink} to="#about-game">
              <MyTypography variant="h6">
                About
              </MyTypography>
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="#meet-devs">
              <MyTypography variant="h6">
                Meet the Developers
              </MyTypography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <PlayButton />
      </Grid>
    </Grid>
  );
}

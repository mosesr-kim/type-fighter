import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link, Typography, styled } from '@material-ui/core';
import PlayButton from '../components/play-button';

const NavText = styled(Typography)({
  color: 'rgb(81, 61, 61)',
  textDecoration: 'none',
  transition: 'color 0.25s ease-in-out',
  '&:hover': {
    color: '#F24956'
  }
});

export default function NavBar(props) {
  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Link underline="none" component={RouterLink} to="#about-game">
              <NavText variant="h6">
                About
              </NavText>
            </Link>
          </Grid>
          <Grid item>
            <Link underline="none" component={RouterLink} to="#meet-devs">
              <NavText variant="h6">
                Developers
              </NavText>
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

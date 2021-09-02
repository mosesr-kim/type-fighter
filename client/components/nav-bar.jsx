import React from 'react';
import { Grid, Typography, styled } from '@material-ui/core';
import PlayButton from '../components/play-button';

const NavText = styled(Typography)({
  color: 'rgb(81, 61, 61)',
  transition: 'color 0.125s',
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
            <a href="#about-game" style={{ textDecoration: 'none' }}>
              <NavText variant="h6">
                About
              </NavText>
            </a>
          </Grid>
          <Grid item>
            <a href="#meet-devs" style={{ textDecoration: 'none' }}>
              <NavText variant="h6">
                Developers
              </NavText>
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <PlayButton />
      </Grid>
    </Grid>
  );
}

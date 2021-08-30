import React from 'react';
import HomeForm from '../components/home-form';
import { Grid } from '@material-ui/core';
import Animations from '../components/animations';

export default function Home(props) {
  return (
    <>
      <Grid container justifyContent="center" alignContent="center">
        <Grid item>
          <HomeForm />
          <Animations />
        </Grid>
      </Grid>
    </>
  );
}

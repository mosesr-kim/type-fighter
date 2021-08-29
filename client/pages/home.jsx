import React from 'react';
import HomeForm from '../components/home-form';
import { Grid } from '@material-ui/core';

export default function Home(props) {
  return (
    <>
      <Grid container justifyContent="center" alignContent="center">
        <Grid item>
          <HomeForm />
        </Grid>
      </Grid>
    </>
  );
}

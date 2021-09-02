import React from 'react';
import { Grid, Typography } from '@material-ui/core';

// const pfpURL = [
//   '/media/joseph-pfp.jpg',
//   '/media/moses-pfp.jpg',
//   '/media/solomon-pfp.jpg'
// ];

export default function MeetDevelopers(props) {
  return (
    <>
      <Grid container spacing={3}>
        <Typography variant="h4" style={{ fontFamily: 'retro, sans-serif', color: '#f24956' }}>
          Meet the Developers
        </Typography>
      </Grid>
    </>
  );
}

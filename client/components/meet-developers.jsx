import React from 'react';
import { Grid, Paper, styled } from '@material-ui/core';

const ProfilePicture = styled('img')({
  maxWidth: '500px',
  maxHeight: '500px'
});

export default function MeetDevelopers(props) {
  return (
    <>
      <Grid container spacing={3}>
        <Paper elevation="3">
          <ProfilePicture src="/media/joseph-pfp.jpg" alt="Joseph Nguyen" />
        </Paper>
        <Paper elevation="3">
          <ProfilePicture src="/media/moses-pfp.jpg" alt="Moses Kim" />
        </Paper>
        <Paper elevation="3">
          <ProfilePicture src="/media/solomon-pfp.jpg" alt="Solomon Jin" />
        </Paper>
      </Grid>
    </>
  );
}

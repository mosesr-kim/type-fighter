import React from 'react';
import { Grid, Typography, styled, Paper } from '@material-ui/core';

const developers = [
  {
    URL: '/media/joseph.jpg',
    name: 'Joseph Nguyen',
    github: 'https://github.com/josephtnguyen',
    linkedin: 'https://www.linkedin.com/in/josephtringuyen/'
  },
  {
    URL: '/media/moses.jpg',
    name: 'Moses Kim',
    github: 'https://github.com/mosesr-kim',
    linkedin: 'https://www.linkedin.com/in/mosesr-kim/'
  },
  {
    URL: '/media/solomon.jpg',
    name: 'Solomon Jin',
    github: 'https://github.com/solomonjin',
    linkedin: 'https://www.linkedin.com/in/solomon-jin/'
  }
];

const StyledImage = styled('img')({
  width: '75%',
  overflow: 'hidden',
  borderRadius: '50%',
  margin: '1rem'
});

const profiles = developers.map(developer => {
  return (
    <Grid item key={developer.name} xs={12} md={4}>
      <Paper elevation={10}
        style={
          {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#816a65'
          }
        }>
        <Grid container justifyContent="center">
          <StyledImage src={developer.URL} />
          <Grid item>
            <Typography variant='h5' style={{ color: '#fefef2' }}>
              {developer.name}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
});

export default function MeetDevelopers(props) {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" style={{ fontFamily: 'retro, sans-serif', color: '#f24956' }}>
            Meet the Developers
          </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={3}>
            {profiles}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

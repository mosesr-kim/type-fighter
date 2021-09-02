import React from 'react';
import { Grid, Typography, styled, Paper, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const developers = [
  {
    URL: '/media/joseph.jpg',
    name: 'Joseph Nguyen',
    github: 'https://github.com/josephtnguyen',
    linkedin: 'https://www.linkedin.com/in/josephtringuyen/',
    blurb: 'I am a software engineer with a background in mathematics and a passion for learning.'
  },
  {
    URL: '/media/moses.jpg',
    name: 'Moses Kim',
    github: 'https://github.com/mosesr-kim',
    linkedin: 'https://www.linkedin.com/in/mosesr-kim/',
    blurb: 'Besides programming, I love listening to electronic music, working on cars, and building custom mechanical keyboards.'
  },
  {
    URL: '/media/solomon.jpg',
    name: 'Solomon Jin',
    github: 'https://github.com/solomonjin',
    linkedin: 'https://www.linkedin.com/in/solomon-jin/',
    blurb: 'A full-stack web developer that loves learning new languages, whether they are human or computer-based.'
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
            backgroundColor: '#816a65',
            padding: '1rem'
          }
        }>
        <Grid container justifyContent="center">
          <StyledImage src={developer.URL} />
          <Grid item xs={12}>
            <Typography variant='h5' style={{ color: '#fefef2' }} align="center">
              {developer.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1' style={{ color: '#fefef2' }} align="center">
              {developer.blurb}
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ display: 'flex' }} justifyContent="space-evenly">
            <IconButton href={developer.github} target="_blank">
              <GitHubIcon fontSize="large"/>
            </IconButton>
            <IconButton href={developer.linkedin} target="_blank">
              <LinkedInIcon fontSize="large"/>
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
});

export default function MeetDevelopers(props) {
  return (
    <>
      <Grid container id="meet-devs">
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

import React from 'react';
import { Grid, styled } from '@material-ui/core';
import PlayButton from './play-button';
import MyTypography from './my-typography';

const AboutGameContainer = styled(Grid)({
  color: 'white'
});

const Gif = styled('img')({
  maxWidth: '100%'
});

export default function AboutTheGame(props) {
  return (
    <AboutGameContainer container spacing={3}>
      <Grid item sm={6}>
        <MyTypography variant="h3" style={{ fontFamily: 'retro, sans-serif' }}>Type Fighter</MyTypography>
        <MyTypography variant="body1">
          Type Fighter allows you to put your typing skills to the
          test against other players in a real-time, online
          experience. Race to complete a phrase before your
          opponent to deal damage and eventually defeat your
          opposition.
        </MyTypography>
        <PlayButton style={{ margin: '1rem 0' }} />
      </Grid>
      <Grid item sm={6}>
        <Gif src="/media/about-game.gif" />
      </Grid>
    </AboutGameContainer>
  );
}

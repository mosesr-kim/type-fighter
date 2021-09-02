import React from 'react';
import { Grid, styled, Typography } from '@material-ui/core';

const HowToPlayContainer = styled(Grid)({
  color: 'white'
});

const Gif = styled('img')({
  maxWidth: '100%'
});

export default function HowToPlay(props) {
  return (
    <HowToPlayContainer container spacing={3}>
      <Grid item sm={6}>
        <Gif src="/media/creating-user.gif" alt="creating user gif" />
      </Grid>
      <Grid item sm={6}>
        <Grid container>
          <Grid container direction='column'>
            <Typography variant="h4" style={{ fontFamily: 'retro, sans-serif', color: '#f24956' }}>How to play</Typography>
            <Typography variant="body1" style={{ lineHeight: '2.2' }}>
              &#8226; Enter your username and select your character.<br/>
              &#8226; Join an existing game by clicking JOIN GAME.<br />
              &#8226; Or challenge others by clicking POST A GAME.<br/>
              &#8226; Once a game begins, press TAB to being typing.<br />
              &#8226; Whoever finishes typing the phrase first attacks the opponent.<br />
              &#8226; Last man standing wins!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </HowToPlayContainer>
  );
}

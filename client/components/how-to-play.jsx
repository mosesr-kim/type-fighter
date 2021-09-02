import React from 'react';
import { Grid, styled } from '@material-ui/core';
import MyTypography from './my-typography';

const HowToPlayContainer = styled(Grid)({
  color: 'white'
});

const Gif = styled('img')({
  maxWidth: '100%'
});

export default function HowToPlay(props) {
  return (
    <HowToPlayContainer container spacing={3} id="about-game">
      <Grid item sm={6}>
        <Gif src="/media/creating-user.gif" alt="creating user gif" />
      </Grid>
      <Grid item sm={6}>
        <Grid container>
          <Grid container direction='column'>
            <MyTypography variant="h4" style={{ fontFamily: 'retro, sans-serif', color: '#f24956' }}>How to play</MyTypography>
            <MyTypography variant="body1" style={{ lineHeight: '2' }}>
              &#8226; Enter your username and select your character.<br/>
              &#8226; Join an existing game by clicking JOIN GAME.<br />
              &#8226; Or challenge others by clicking POST A GAME.<br/>
              &#8226; Once a game begins, press TAB to being typing.<br />
              &#8226; Whoever finishes typing the phrase first attacks the opponent.<br />
              &#8226; Last man standing wins!
            </MyTypography>
          </Grid>
        </Grid>
      </Grid>
    </HowToPlayContainer>
  );
}

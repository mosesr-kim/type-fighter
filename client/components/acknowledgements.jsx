import React from 'react';
import { Grid, Link, styled } from '@material-ui/core';
import MyTypography from './my-typography';

const AboutGameContainer = styled(Grid)({
  color: 'white'
});

export default function Acknowledgements(props) {
  return (
    <AboutGameContainer container spacing={3}>
      <Grid item>
        <MyTypography variant="h4" style={{ fontFamily: 'retro, sans-serif', color: '#EC6D77' }}>
          Acknowledgements
        </MyTypography>
        <MyTypography variant="body1">
          Sprite Sheets: by <Link href="https://luizmelo.itch.io/" style={{ color: '#EC6D77' }}>Luiz Melo</Link>
        </MyTypography>
        <MyTypography variant="body1">
          BGM: Illusionary by <Link href="https://dova-s.jp/bgm/play15057.html" style={{ color: '#EC6D77' }}>FLASH ☆ BEAT</Link>
        </MyTypography>
      </Grid>
    </AboutGameContainer>
  );
}

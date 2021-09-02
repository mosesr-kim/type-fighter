import React from 'react';
import { NavBar, AboutTheGame, TechnologiesUsed } from '../components';
import { Grid, styled } from '@material-ui/core';

const PageSection = styled(Grid)({
  maxWidth: '1080px',
  margin: '0 auto',
  padding: '2rem 1rem'
});

const HeroImage = styled(Grid)({
  backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(81, 61, 61, 1)), url(/media/background.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top',
  backgroundSize: 'cover',
  minHeight: '50vh',
  position: 'relative'
});

const BackGround = styled('div')({
  backgroundColor: 'rgb(81, 61, 61)'
});

const LightBG = styled(Grid)({
  backgroundColor: '#816A65'
});

export default function Home(props) {
  return (
    <>
      <Grid container>
        <PageSection item xs={12}>
          <NavBar />
        </PageSection>
      </Grid>

      <HeroImage container alignItems="center">
        <PageSection item xs={12}>
          <AboutTheGame />
        </PageSection>
      </HeroImage>

      <BackGround>
        <Grid container >
          <PageSection item xs={12}>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <p>Some image here</p>
              </Grid>
              <Grid item md={6}>
                <Grid container direction='column'>
                  <Grid item>
                    <h2>About the game</h2>
                  </Grid>
                  <Grid item>
                    <p>
                      Interdum et malesuada fames ac ante ipsum primis in faucibus.
                      Aliquam at velit urna. Nam ex ligula, elementum eget viverra sit
                      amet, efficitur a tortor. Integer tristique egestas euimdod.
                      Fusce sed risus ac urna mollis pellentesque. Sed et lacinia lectus.
                      Cras dapibus lacinia ligula, sit amet ullamcorper metus sodales non.
                      Maecenas fringilla erat ut eros consequat vestibulum. Ut porta sit
                      amet felis eu imperdiet. Sed id leo ligula.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </PageSection>
        </Grid>

        <LightBG container>
          <PageSection item xs={12}>
            <TechnologiesUsed />
          </PageSection>
        </LightBG>
      </BackGround>
    </>
  );
}

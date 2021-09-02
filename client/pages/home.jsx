import React from 'react';
import { NavBar } from '../components';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, styled } from '@material-ui/core';

const PageSection = styled(Grid)({
  maxWidth: '1080px',
  margin: '0 auto',
  padding: '2rem'
});

const Gif = styled('img')({
  maxWidth: '100%'
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
  backgroundColor: 'rgb(81, 61, 61)',
  minHeight: '100vh'
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
          <Grid container>
            <Grid item sm={6}>
              <Grid container>
                <Grid item>
                  <h2>Type Fighter</h2>
                </Grid>
                <Grid item>
                  <p>
                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    Aliquam at velit urna. Nam ex ligula, elementum eget viverra sit
                    amet, efficitur a tortor. Integer tristique egestas euismod.
                    Fusce sed risus ac urna mollis pellentesque. Sed et lacinia lectus.
                    Cras dapibus lacinia ligula, sit amet ullamcorper metus sodales non.
                    Maecenas fringilla erat ut eros consequat vestibulum. Ut porta sit
                    amet felis eu imperdiet. Sed id leo ligula.
                  </p>
                </Grid>
                <Grid item>
                  <RouterLink to="/game">
                    <button>Play</button>
                  </RouterLink>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6}>
              <Grid container>
                <Gif src="/media/typing-phrase.gif" alt="typing phrase gif"/>
              </Grid>
            </Grid>
          </Grid>
        </PageSection>
      </HeroImage>

      <BackGround>
        <Grid container >
          <PageSection item xs={12}>
            <Grid container>
              <Grid item sm={6}>
                <p>Some image here</p>
              </Grid>
              <Grid item sm={6}>
                <Grid container direction='column'>
                  <Grid item>
                    <h2>About the game</h2>
                  </Grid>
                  <Grid item>
                    <p>
                      Interdum et malesuada fames ac ante ipsum primis in faucibus.
                      Aliquam at velit urna. Nam ex ligula, elementum eget viverra sit
                      amet, efficitur a tortor. Integer tristique egestas euismod.
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
            <Grid container>
              <Grid item sm={6}>
                <Grid container direction='column'>
                  <Grid item>
                    <h2>How to play</h2>
                  </Grid>
                  <Grid item>
                    <p>
                      Interdum et malesuada fames ac ante ipsum primis in faucibus.
                      Aliquam at velit urna. Nam ex ligula, elementum eget viverra sit
                      amet, efficitur a tortor. Integer tristique egestas euismod.
                      Fusce sed risus ac urna mollis pellentesque. Sed et lacinia lectus.
                      Cras dapibus lacinia ligula, sit amet ullamcorper metus sodales non.
                      Maecenas fringilla erat ut eros consequat vestibulum. Ut porta sit
                      amet felis eu imperdiet. Sed id leo ligula.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={6}>
                <Grid container>
                  <Gif src="/media/creating-user.gif" alt="creating user gif" />
                </Grid>
              </Grid>
            </Grid>
          </PageSection>
        </LightBG>
      </BackGround>
    </>
  );
}

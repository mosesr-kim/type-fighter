import React from 'react';
import { NavBar, AboutTheGame, HowToPlay, TechnologiesUsed, MeetDevelopers, Acknowledgements } from '../components';
import { Grid, styled } from '@material-ui/core';

const NavContainer = styled(Grid)({
  backgroundColor: '#FEFEF2'
});

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
      <NavContainer container>
        <PageSection item xs={12} style={{ padding: '1.25rem' }}>
          <NavBar />
        </PageSection>
      </NavContainer>

      <HeroImage container alignItems="center">
        <PageSection item xs={12}>
          <AboutTheGame />
        </PageSection>
      </HeroImage>

      <BackGround>
        <Grid container >
          <PageSection item xs={12}>
            <HowToPlay />
          </PageSection>
        </Grid>

        <LightBG container>
          <PageSection item xs={12}>
            <TechnologiesUsed />
          </PageSection>
        </LightBG>

        <Grid container>
          <PageSection item xs={12}>
            <MeetDevelopers/>
          </PageSection>
        </Grid>
      </BackGround>

      <LightBG container>
        <PageSection item xs={12}>
          <Acknowledgements />
        </PageSection>
      </LightBG>
    </>
  );
}

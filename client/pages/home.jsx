import React from 'react';
import HomeForm from '../components/home-form';
import { styled } from '@material-ui/core/styles';

const BGContainer = styled('div')(() => ({
  position: 'relative'
}));

const BGImage = styled('img')(() => ({
  display: 'block',
  minWidth: '100%',
  maxHeight: '100vh',
  minHeight: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -1
}));

export default function Home(props) {
  return (
    <>
      <BGContainer>
        <BGImage src="sf2background.png" alt="street fighter 2 background"/>
      </BGContainer>
      <HomeForm />
    </>
  );
}

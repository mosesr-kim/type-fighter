import React from 'react';
import { styled } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const StyledButton = styled('button')({
  color: 'white',
  backgroundColor: '#F24956',
  fontSize: '1.5rem',
  width: '6rem',
  height: '2.5rem',
  border: '0',
  borderRadius: '5px'
});

export default function PlayButton(props) {
  return (
    <RouterLink to="/game">
      <StyledButton style={props.style} variant="button">Play</StyledButton>
    </RouterLink>
  );
}

import React from 'react';
import { Box, styled } from '@material-ui/core';

export default function HPBar(props) {
  const { hp, side } = props;
  let rotation = 0;
  if (side === 'left') {
    rotation = 0;
  } else if (side === 'right') {
    rotation = 180;
  }

  const BarContainer = styled('div')({
    border: '3px solid white',
    width: '500px',
    height: '3rem',
    transform: `rotateY(${rotation}deg)`
  });

  const Bar = styled('div')({
    backgroundColor: 'red',
    height: '100%',
    width: `${hp}%`
  });

  return (
    <Box m={2}>
      <BarContainer>
        <Bar />
      </BarContainer>
    </Box>
  );
}

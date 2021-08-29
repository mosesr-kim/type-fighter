import React from 'react';
import { Box, styled } from '@material-ui/core';

export default function HPBar(props) {
  const { hp, side } = props;

  // determine side
  let rotation = 0;
  if (side === 'left') {
    rotation = 0;
  } else if (side === 'right') {
    rotation = 180;
  }

  // determine HP bar color
  let barColor = 'yellow';
  if (hp < 30) {
    barColor = 'red';
  } else if (hp < 60) {
    barColor = 'orange';
  }

  const BarContainer = styled('div')({
    border: '3px solid white',
    maxWidth: '500px',
    width: '40vw',
    height: '3rem',
    transform: `rotateY(${rotation}deg)`
  });

  const Bar = styled('div')({
    backgroundColor: barColor,
    height: '100%',
    width: `${hp}%`,
    transition: 'all 0.25s ease'
  });

  return (
    <Box m={2}>
      <BarContainer>
        <Bar />
      </BarContainer>
    </Box>
  );
}

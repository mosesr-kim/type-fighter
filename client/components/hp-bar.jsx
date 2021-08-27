import React from 'react';
import { Box, styled } from '@material-ui/core';

export default function HPBar(props) {
  const { hp } = props;

  const BarContainer = styled('div')({
    border: '3px solid white',
    width: '500px',
    height: '3rem'
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

import React from 'react';
import { styled } from '@material-ui/core';

const BarContainer = styled('div')({
  backgroundColor: 'gray'
});

const Bar = styled('div')({
  backgroundColor: 'red'
});

export default function HPBar(props) {
  // const { hp } = props;
  const hp = 50;
  return (
    <BarContainer>
      <Bar width={hp} />
    </BarContainer>
  );
}

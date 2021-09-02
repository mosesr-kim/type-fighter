import React from 'react';
import { Typography, styled } from '@material-ui/core';

const StyledTypography = styled(Typography)({
  margin: '0.75rem 0'
});

export default function MyTypography(props) {
  return (
    <StyledTypography variant={props.variant} style={props.style}>
      {props.children}
    </StyledTypography>
  );
}

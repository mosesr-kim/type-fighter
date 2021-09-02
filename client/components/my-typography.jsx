import React from 'react';
import { Typography } from '@material-ui/core';

export default function MyTypography(props) {
  return (
    <Typography variant={props.variant} style={props.style}>
      {props.children}
    </Typography>
  );
}

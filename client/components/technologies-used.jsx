import React from 'react';
import { Box, Grid, styled, Typography } from '@material-ui/core';

const TechContainer = styled(Grid)({
  color: 'white'
});

const Badge = styled('img')({
  width: '5rem',
  margin: '1rem 2rem'
});

export default function TechnologiesUsed(props) {
  return (
    <TechContainer container>
      <Grid item sm={12}>
        <Typography variant="h4" style={{ fontFamily: 'retro, sans-serif', color: '#F24956' }}>
          Technologies Used
        </Typography>
        <Box width="100%" justifyContent="space-between">
          <Badge src="/badges/javascript.svg" alt="JavaScript" />
          <Badge src="/badges/react.svg" alt="React" />
          <Badge src="/badges/material-ui.svg" alt="Material UI" />
          <Badge src="/badges/nodejs.svg" alt="Node.js" />
          <Badge src="/badges/postgresql.svg" alt="PostgreSQL" />
          <Badge src="/badges/socket-io.svg" alt="Socket.IO" />
        </Box>
      </Grid>
    </TechContainer>
  );
}

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import TypingBox from '../components/typing-box';
import Countdown from '../components/countdown';
import HPBar from '../components/hp-bar';
import { io } from 'socket.io-client';
import { Grid, Box, styled } from '@material-ui/core';

const dummyMeta = {
  gameId: 1,
  hostId: 1,
  hostUsername: 'Player 1',
  oppId: 2,
  oppUsername: 'Player 2'
};

const SpriteDummy = styled('div')({
  backgroundColor: 'blue',
  width: '20rem',
  height: '30rem'
});

export default function Fight(props) {
  const [metaData, setMetaData] = useState(null);
  const location = useLocation();

  const [counting, setCounting] = useState(true);
  function removeCountdown() {
    setCounting(false);
  }

  // get metaData
  useEffect(() => {
    setMetaData(dummyMeta);
  }, []);

  // socket connection
  useEffect(() => {
    const gameId = parseInt(location.search.replace('?gameId=', ''));
    const socket = io('/', { query: gameId }); // eslint-disable-line
  }, []);

  if (!metaData) {
    return <></>;
  }
  return (
    <Grid container direction="column">
      {/* Sprites Box */}
      <Grid item xs={12}>
        <Grid container>
          {/* Player 1 */}
          <Grid item xs={6}>
            <Grid container justifyContent="center">
              {/* HP Bar */}
              <Grid item>
                <HPBar hp={80} side={'left'} />
              </Grid>

              {/* Sprite */}
              <Grid item>
                <SpriteDummy />
              </Grid>
            </Grid>
          </Grid>

          {/* Player 2 */}
          <Grid item xs={6}>
            <Grid container justifyContent="center">
              {/* HP Bar */}
              <Grid item>
                <HPBar hp={40} side={'right'} />
              </Grid>

              {/* Sprite */}
              <Grid item>
                <SpriteDummy />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Typing Box */}
      <Grid item xs={12}>
        <Box my={2}>
          <Grid container justifyContent="center">
            <Grid item>
              <TypingBox text="Type Text Here" />
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Countdown counting={counting} removeCountdown={removeCountdown} />
    </Grid>
  );
}

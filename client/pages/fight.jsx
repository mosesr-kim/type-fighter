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

  const [counting, setCounting] = useState(false);
  function removeCountdown() {
    setCounting(false);
  }

  const [yourHp, setYourHp] = useState(100);
  const [oppHp, setOppHp] = useState(100);

  const [phrase, setPhrase] = useState('Getting phrase');

  function damage(player) {
    const hit = 20;
    if (player === 'you') {
      setYourHp(yourHp - hit);
    } else if (player === 'opp') {
      setOppHp(oppHp - hit);
    }
  }

  // get metaData
  useEffect(() => {
    setMetaData(dummyMeta);
  }, []);

  // socket connection
  useEffect(() => {
    const gameId = location.search.replace('?gameId=', '');
    const socket = io('/', { query: { gameId } });

    socket.on('get random', phrase => {
      setPhrase(phrase.content);
    });

    socket.emit('get random', gameId);
    return () => {
      socket.disconnect();
    };
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
              <Grid item onClick={() => damage('you')}>
                <HPBar hp={yourHp} side={'left'} />
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
              <Grid item onClick={() => damage('opp')}>
                <HPBar hp={oppHp} side={'right'} />
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
              <TypingBox text={phrase} />
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Countdown counting={counting} removeCountdown={removeCountdown} />
    </Grid>
  );
}

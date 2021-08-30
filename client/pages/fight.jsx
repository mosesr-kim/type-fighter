import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import TypingBox from '../components/typing-box';
import Countdown from '../components/countdown';
import HPBar from '../components/hp-bar';
import { Grid, Box, styled } from '@material-ui/core';
import FightContext from '../lib/fight-context';
import { io } from 'socket.io-client';

const PlayerName = styled('h1')({
  fontFamily: 'retro, sans-serif',
  color: 'white',
  letterSpacing: '0.1rem',
  margin: '0.5rem 0'
});

const SpriteDummy = styled('div')({
  backgroundColor: 'blue',
  width: '20rem',
  height: '30rem'
});

export default function Fight(props) {
  const location = useLocation();

  const socket = useRef(null);
  const [metaData, setMetaData] = useState(null);
  const [counting, setCounting] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [yourId, setYourId] = useState(0);
  const [yourUsername, setYourUsername] = useState('');
  const [oppUsername, setOppUsername] = useState('');
  const [yourHp, setYourHp] = useState(100);
  const [oppHp, setOppHp] = useState(100);
  const [phrase, setPhrase] = useState('Getting phrase');

  const hit = 20;
  const gameId = location.search.replace('?gameId=', '');
  const contextValue = {
    youFinishFirst: () => {
      const damagedHp = oppHp - hit;
      setOppHp(damagedHp);
      socket.current.emit('finish phrase', { gameId, damagedHp });
    },
    counting
  };

  function allowTyping() {
    setCounting(false);
    setTimeout(() => { setShowCountdown(false); }, 1000);
  }

  // get metaData
  useEffect(async () => {
    const res = await fetch(`/api/game/${gameId}`);
    const metaData = await res.json();
    setMetaData(metaData);
    if (!metaData.oppId) {
      setYourId(metaData.hostId);
      setYourUsername(metaData.hostName);
      setOppUsername('Waiting for opponent...');
    } else {
      setYourId(metaData.oppId);
      setYourUsername(metaData.oppName);
      setOppUsername(metaData.hostName);
      socket.current.emit('game joined', metaData);
    }
  }, []);

  // socket connection
  useEffect(() => {
    socket.current = io('/', { query: { gameId } });

    socket.current.on('game joined', metaData => {
      setMetaData(metaData);
      setOppUsername(metaData.oppName);
    });

    socket.current.on('get random', phrase => {
      setPhrase(phrase.content);
    });

    socket.current.on('finish phrase', damagedHp => {
      setYourHp(damagedHp);
      setPhrase('Getting phrase');
    });
    return () => {
      socket.current.disconnect();
    };
  }, []);

  // get new phrase
  useEffect(() => {
    if (yourHp !== 0 && oppHp !== 0 && metaData && metaData.oppId) {
      if (yourId === metaData.hostId) {
        socket.current.emit('get random', gameId);
      }
      setCounting(true);
      setShowCountdown(true);
      setPhrase('Getting phrase');
    }
  }, [yourHp, oppHp, metaData]);

  if (!metaData) {
    return <></>;
  }
  return (
    <FightContext.Provider value={contextValue}>
      <Grid container direction="column" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Typing Row */}
        <Grid item xs={12}>
          <Box my={4}>
            <Grid container justifyContent="center">
              <Grid item xs>
                <TypingBox text={phrase} />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Sprites Row */}
        <Grid item xs={12}>
          <Grid container>
            {/* Player 1 */}
            <Grid item xs={6}>
              <Grid container direction="column" alignItems="center">
                {/* HP Bar */}
                <Grid item>
                  <Box mb={8}>
                    <PlayerName style={{ marginLeft: '1rem' }}>
                      {yourUsername}
                    </PlayerName>
                    <HPBar hp={yourHp} side={'left'} />
                  </Box>
                </Grid>

                {/* Sprite */}
                <Grid item>
                  <SpriteDummy />
                </Grid>
              </Grid>
            </Grid>

            {/* Player 2 */}
            <Grid item xs={6}>
              <Grid container direction="column" alignItems="center">

                {/* HP Bar */}
                <Grid item>
                  <Box mb={8}>
                    <PlayerName style={{ textAlign: 'right', marginRight: '1rem' }}>
                      {oppUsername}
                    </PlayerName>
                    <HPBar hp={oppHp} side={'right'} />
                  </Box>
                </Grid>

                {/* Sprite */}
                <Grid item>
                  <SpriteDummy />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Countdown showCountdown={showCountdown} allowTyping={allowTyping} />
      </Grid>
    </FightContext.Provider>
  );
}

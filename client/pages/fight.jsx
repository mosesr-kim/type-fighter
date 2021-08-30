import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import TypingBox from '../components/typing-box';
import Countdown from '../components/countdown';
import HPBar from '../components/hp-bar';
import { Grid, Box, styled } from '@material-ui/core';
import { connectSocket, disconnectSocket, getRandom, finishPhrase } from '../lib/fight-socket';
import FightContext from '../lib/fight-context';

const dummyMeta = {
  gameId: 1,
  hostId: 1,
  hostUsername: 'Player 1',
  oppId: 2,
  oppUsername: 'Player 2'
};

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
  const [metaData, setMetaData] = useState(null);
  const location = useLocation();

  const [counting, setCounting] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [yourId, setYourId] = useState(0);
  const [oppId, setOppId] = useState(0);
  const [yourUsername, setYourUsername] = useState('');
  const [oppUsername, setOppUsername] = useState('');
  const [yourHp, setYourHp] = useState(100);
  const [oppHp, setOppHp] = useState(100);
  const [phrase, setPhrase] = useState('Getting phrase');

  const gameId = location.search.replace('?gameId=', '');
  const contextValue = {
    youFinishFirst: () => {
      damage('opp');
      finishPhrase(gameId, yourId);
    },
    counting
  };

  function allowTyping() {
    setCounting(false);
    setTimeout(() => { setShowCountdown(false); }, 1000);
  }

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
    setYourId(dummyMeta.hostId);
    setOppId(dummyMeta.oppId);
    setYourUsername(dummyMeta.hostUsername);
    setOppUsername(dummyMeta.oppUsername);
  }, []);

  // socket connection
  useEffect(() => {
    connectSocket(gameId, {
      setPhrase,
      damage
    });
    // getRandom(gameId);
    return () => {
      disconnectSocket();
    };
  }, []);

  // get new phrase
  useEffect(() => {
    if (yourHp !== 0 && oppHp !== 0) {
      getRandom(gameId);
      setCounting(true);
      setShowCountdown(true);
      setPhrase('Getting phrase');
    }
  }, [yourHp, oppHp]);

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

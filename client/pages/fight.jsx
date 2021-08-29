import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import TypingBox from '../components/typing-box';
import Countdown from '../components/countdown';
import { io } from 'socket.io-client';

const dummyMeta = {
  gameId: 1,
  hostId: 1,
  hostUsername: 'Player 1',
  oppId: 2,
  oppUsername: 'Player 2'
};

export default function Fight(props) {
  const [metaData, setMetaData] = useState(null);
  const location = useLocation();

  const [counting, setCounting] = useState(false);
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
    <>
      <TypingBox text="Type Text Here" />
      <Countdown counting={counting} removeCountdown={removeCountdown} />
    </>
  );
}

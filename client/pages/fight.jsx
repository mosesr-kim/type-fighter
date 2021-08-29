import React, { useState, useEffect } from 'react';

import TypingBox from '../components/typing-box';

const dummyMeta = {
  gameId: 1,
  hostId: 1,
  hostUsername: 'Player 1',
  oppId: 2,
  oppUsername: 'Player 2'
};

export default function Fight(props) {
  const [metaData, setMetaData] = useState(null);

  useEffect(() => {
    setMetaData(dummyMeta);
  }, []);

  if (!metaData) {
    return <></>;
  }

  return (
    <TypingBox text="Type Text Here" />
  );
}

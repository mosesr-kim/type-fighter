import React, { useState } from 'react';

import ReactAudioPlayer from 'react-audio-player';
import { styled } from '@material-ui/core';

const MuteButton = styled('img')({
  width: '3rem'
});

export default function BGM(props) {
  const [mute, setMute] = useState(true);
  const muteSrc = mute ? '/media/play.svg' : '/media/pause.svg';
  return (
    <>
      <MuteButton src={muteSrc} onClick={() => { setMute(!mute); }} />
      <ReactAudioPlayer autoPlay muted={mute} src="/media/rick-roll.mp3" volume={0.5} />
    </>
  );
}

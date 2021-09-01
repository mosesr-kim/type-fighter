import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { styled } from '@material-ui/core';
// Illusionary by FLASH ☆ BEAT

const MuteButton = styled('img')({
  width: '3rem'
});

export default function BGM(props) {
  const [mute, setMute] = useState(true);
  const muteSrc = mute ? '/media/play.svg' : '/media/pause.svg';
  return (
    <>
      <MuteButton src={muteSrc} onClick={() => { setMute(!mute); }} />
      <ReactAudioPlayer muted={mute} controls loop src="/media/illusionary.mp3" volume={0.15} />
    </>
  );
}

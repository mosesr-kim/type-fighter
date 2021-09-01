import React, { useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { styled } from '@material-ui/core';

import SoundContext from '../lib/sound-context';
// Illusionary by FLASH ☆ BEAT

const SoundControlButton = styled('img')({
  width: '3rem'
});

export default function BGM(props) {
  const { sound, setSound, music, setMusic } = useContext(SoundContext);
  const soundSrc = sound ? '/media/sound.svg' : '/media/mute.svg';
  const musicSrc = music ? '/media/music.svg' : '/media/no-music.svg';
  return (
    <>
      <SoundControlButton src={soundSrc} onClick={() => { setSound(!sound); }} />
      <SoundControlButton src={musicSrc} onClick={() => { setMusic(!music); }} />
      <ReactAudioPlayer autoPlay muted={!music || !sound} loop src="/media/illusionary.mp3" volume={0.15} />
    </>
  );
}

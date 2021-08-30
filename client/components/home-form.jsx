import React, { useState } from 'react';
import { Grid, styled } from '@material-ui/core';

const CharPortrait = styled('img')({
  border: '3px solid white',
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  '&:hover': {
    cursor: 'pointer',
    border: '3px solid red'
  }
});

const ErrorMessage = styled('div')({
  fontFamily: 'retro, sans-serif',
  fontSize: '1.5rem',
  color: 'red',
  margin: '1rem 0'
});

export default function HomeForm(props) {
  const [character, setCharacter] = useState(null);
  const [username, setUsername] = useState('');
  const [displayMessage, setDisplayMessage] = useState(null);

  const charList = [
    {
      name: 'ryu',
      image: '/portraits/ryu.gif'
    },
    {
      name: 'ken',
      image: '/portraits/ken.gif'
    },
    {
      name: 'guile',
      image: '/portraits/guile.gif'
    },
    {
      name: 'chunli',
      image: '/portraits/chunli.gif'
    }
  ];

  const changeName = event => {
    setUsername(event.target.value);
  };

  const chooseChar = char => {
    setCharacter(char);
  };

  const submitUser = event => {
    event.preventDefault();
    if (!username || !character) {
      setDisplayMessage('Please select a name and character!');
    }
    setDisplayMessage('Loading...');
  };

  return (
    <form className="homeForm" onSubmit={submitUser}>
      <input
        type="text" name="playerName" id="playerName" placeholder="Player Name"
        autoComplete="off" spellCheck="false" value={username}
        onChange={changeName}
      />
      <Grid container spacing={2}>
        {charList.map(char => {
          const selected = char.name === character
            ? { border: '3px solid green' }
            : null;
          return (
          <Grid item key={char.name} onClick={() => chooseChar(char.name)}>
            <CharPortrait src={char.image} alt={char.name} style={selected} />
          </Grid>);
        })}
      </Grid>
      <button type="submit" className="startButton">Start</button>
      {displayMessage && <ErrorMessage>{displayMessage}</ErrorMessage>}
    </form>
  );
}

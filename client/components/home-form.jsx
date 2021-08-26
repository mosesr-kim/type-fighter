import React from 'react';

export default function HomeForm(props) {
  return (
    <form action="" className="homeForm">
      <input type="text" name="playerName" id="playerName" placeholder="Player Name" autoComplete="off" spellCheck="false"/>
      <button type="submit" className="startButton">Start</button>
    </form>
  );
}

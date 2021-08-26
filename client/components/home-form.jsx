import React from 'react';
import { Grid } from '@material-ui/core';

export default function HomeForm(props) {
  return (
    <form action="" className="homeForm">
      <input type="text" name="playerName" id="playerName" placeholder="Player Name" autoComplete="off" spellCheck="false"/>
      <Grid container spacing={2}>
        <Grid item>
          <img src="/portraits/ryu.gif" alt="ryu" className="portrait" />
        </Grid>
        <Grid item>
          <img src="/portraits/ken.gif" alt="ken" className="portrait" />
        </Grid>
        <Grid item>
          <img src="/portraits/guile.gif" alt="guile" className="portrait" />
        </Grid>
        <Grid item>
          <img src="/portraits/chunli.gif" alt="chunli" className="portrait" />
        </Grid>
      </Grid>
      <button type="submit" className="startButton">Start</button>
    </form>
  );
}

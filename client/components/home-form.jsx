import React from 'react';

export default function HomeForm(props) {
  return (
    <form action="">
      <input type="text" name="username" id="username" placeholder="Username" autoComplete="off" />
      <button type="submit">Start</button>
    </form>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <Link to="/game">
      <button>Play</button>
    </Link>
  );
}

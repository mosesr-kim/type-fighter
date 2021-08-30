import React, { useState, useEffect, useContext } from 'react';
import {
  styled,
  Container,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box
} from '@material-ui/core';
import { io } from 'socket.io-client';
import RouterContext from '../lib/router-context';

const GameButton = styled('button')({
  background: 'blue',
  border: '3px solid black',
  height: '3rem',
  width: '10rem',
  textTransform: 'uppercase',
  textDecoration: 'none',
  '&:hover': {
    border: '3px solid white',
    cursor: 'pointer'
  }
});

const PostGameButton = styled(GameButton)({
  background: 'blue'
});

const JoinGameButton = styled(GameButton)({
  background: 'red'
});

const GamesTable = styled(Table)({
  fontFamily: 'retro, sans-serif'
});

export default function Lobby(props) {
  const [posts, setPosts] = useState([]);
  const { history } = useContext(RouterContext);

  // connect socket
  useEffect(() => {
    const socket = io();

    socket.on('new game', game => {
      setPosts(prevPosts => [...prevPosts, game]);
    });

    socket.on('game joined', game => {
      setPosts(prevPosts => prevPosts.filter(post => post.gameId !== game.gameId));
    });

    socket.emit('join lobby');
    return () => {
      socket.disconnect();
    };
  }, []);

  // get posted games
  useEffect(() => {
    fetch('/api/games')
      .then(res => res.json())
      .then(posts => setPosts(posts));
  }, []);

  function addPost() {
    const req = {
      method: 'POST'
    };
    fetch('/api/game', req)
      .then(res => res.json())
      .then(result => {
        const { gameId } = result;
        history.push(`/fight?gameId=${gameId}`);
      });
  }

  function joinGame(event) {
    const gameId = event.target.closest('button').id;
    const req = {
      method: 'PUT'
    };
    fetch(`/api/game/${gameId}`, req)
      .then(res => res.json())
      .then(result => {
        const { gameId } = result;
        history.push(`/fight?gameId=${gameId}`);
      });
  }

  return (
    <Container>
      <Box mt={'20vh'}>
        <Grid container justifyContent="center">
          <Grid item xs={8}>
            <TableContainer>
              <GamesTable>
                <TableHead>
                  <TableRow>
                    <TableCell>Opponent</TableCell>
                    <TableCell>Gamemode</TableCell>
                    <TableCell align="center">
                      <PostGameButton onClick={addPost}>
                        Post A Game
                      </PostGameButton>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {posts.map(post => (
                    <TableRow key={post.gameId}>
                      <TableCell>{post.username}</TableCell>
                      <TableCell>Normal</TableCell>
                      <TableCell align="center">
                        <JoinGameButton id={post.gameId} onClick={joinGame}>
                          Join Game
                        </JoinGameButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </GamesTable>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

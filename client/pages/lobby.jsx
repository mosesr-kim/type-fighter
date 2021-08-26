import React, { useState, useEffect } from 'react';
import {
  styled,
  Container,
  Button,
  Grid,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';
import { io } from 'socket.io-client';

const PostGameButton = styled(Button)({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px'
});

const PostedGame = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px'
});

export default function Lobby(props) {
  const [posts, setPosts] = useState([]);

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
    fetch('/api/game', req);
  }

  function joinGame(event) {
    const gameId = event.target.closest('button').id;
    const req = {
      method: 'PUT'
    };
    fetch(`/api/game?gameId=${gameId}`, req);
  }

  return (
    <Container fixed>
      <PostGameButton variant="contained" onClick={addPost}>
        Post A Game
      </PostGameButton>
      <Grid container>
        <Grid item>
          <TableContainer>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Gamemode</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map(post => (
                <TableRow key={post.gameId}>
                  <TableCell>No Name</TableCell>
                  <TableCell>Normal</TableCell>
                  <TableCell>
                    <PostedGame variant="contained" id={post.gameId} onClick={joinGame}>
                      Join Game {post.gameId}
                    </PostedGame>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import { Container, Button, List, ListItem, ListItemText, styled } from '@material-ui/core';
// import { io } from 'socket.io-client';

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

  useEffect(() => {
    // const socket = io();
    fetch('/api/games')
      .then(res => res.json())
      .then(posts => setPosts(posts));
  }, []);

  return (
    <Container>
      <PostGameButton variant="contained">
        Post A Game
      </PostGameButton>
      <List>
        {posts.map(post => (
          <ListItem key={post.gameId}>
            <ListItemText>
              <PostedGame variant="contained">
                Join Game {post.gameId}
              </PostedGame>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

import React, { useState } from 'react';
import { Container, Button, List, ListItem, ListItemText, styled } from '@material-ui/core';

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
  const [posts] = useState([
    {
      gameId: 1,
      isJoined: false,
      createdAt: null
    },
    {
      gameId: 2,
      isJoined: false,
      createdAt: null
    },
    {
      gameId: 3,
      isJoined: false,
      createdAt: null
    }
  ]);

  // useEffect(() => {
  //   console.log('fetching');
  // });

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

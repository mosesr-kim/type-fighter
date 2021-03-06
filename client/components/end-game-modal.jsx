import React from 'react';
import { styled } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ModalContainer = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const Modal = styled('div')({
  fontFamily: 'retro, sans-serif',
  color: 'white',
  backgroundColor: 'rgba(40, 40, 40, 0.7)',
  border: '5px solid black',
  width: '30rem',
  height: '20rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});

const Message = styled('h1')({
  fontSize: '5rem',
  letterSpacing: '0.1rem',
  textAlign: 'center',
  margin: '1rem 0'
});

const ReturnButton = styled('button')({
  color: 'white',
  backgroundColor: 'blue',
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

export default function EndGameModal(props) {
  const { showModal, didWin, oppDisconnected } = props;

  let message = 'You Lose';
  if (didWin) {
    message = 'You Win!';
  } else if (oppDisconnected) {
    message = 'Connection has been lost...';
  }

  if (!showModal) return null;
  return (
    <ModalContainer>
      <Modal>
        <Message style={oppDisconnected ? { fontSize: '3rem' } : null}>{message}</Message>
        <Link to="/game/lobby">
          <ReturnButton>Return to Lobby</ReturnButton>
        </Link>
      </Modal>
    </ModalContainer>
  );
}

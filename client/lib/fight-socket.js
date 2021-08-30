import { io } from 'socket.io-client';

let socket;

export function connectSocket(gameId, functions) {
  const { setPhrase, damage } = functions;
  socket = io('/', { query: { gameId } });

  socket.on('get random', phrase => {
    setPhrase(phrase.content);
  });

  socket.on('finish phrase', winnerId => {
    damage('you');
  });
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
  }
}

export function getRandom(gameId) {
  if (socket) {
    socket.emit('get random', gameId);
  }
}

export function finishPhrase(gameId, winnerId) {
  if (socket) {
    socket.emit('finish phrase', { gameId, winnerId });
  }
}

import { io } from 'socket.io-client';

let socket;

export function connectSocket(gameId, setters) {
  const { setPhrase } = setters;
  socket = io('/', { query: { gameId } });

  socket.on('get random', phrase => {
    setPhrase(phrase.content);
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
    console.log('finished');
    socket.emit('finish phrase', { gameId, winnerId });
  }
}

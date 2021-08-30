import { io } from 'socket.io-client';

let socket;

export function connectSocket(gameId, functions) {
  const { setPhrase, setMetaData, setOppUsername, damage } = functions;
  socket = io('/', { query: { gameId } });

  socket.on('game joined', metaData => {
    setMetaData(metaData);
    setOppUsername(metaData.oppName);
  });

  socket.on('get random', phrase => {
    setPhrase(phrase.content);
  });

  socket.on('finish phrase', winnerId => {
    damage('you');
    setPhrase('Getting phrase');
  });
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
  }
}

export function updateHost(metaData) {
  socket.emit('game joined', metaData);
}

export function getRandom(gameId) {
  if (socket) {
    socket.emit('get random', gameId);
  }
}

export function finishPhrase(gameId, winnerId) {
  console.log('point5');
  if (socket) {
    socket.emit('finish phrase', { gameId, winnerId });
  }
}

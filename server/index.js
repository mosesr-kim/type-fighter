require('dotenv/config');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const jsonMiddleware = express.json();
const db = require('./db');
const ClientError = require('./client-error');
const getQuote = require('./get-quote');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')(process.env.COOKIE_SECRET);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', socket => {
  socket.on('join lobby', () => {
    socket.join('lobby');
  });

  socket.on('get random', async gameId => {
    const phrase = await getQuote();
    socket.to('gameId').emit('get random', phrase);
  });

  socket.on('finish word', gameId => {
    socket.broadcast.to(gameId).emit('finish word');
  });

  socket.on('finish phrase', payload => {
    const { gameId, winnerId } = payload;
    socket.to(gameId).emit('finish phrase', winnerId);
  });
});

app.use(jsonMiddleware);

app.use(staticMiddleware);

app.use(cookieParser);

app.post('/api/user', (req, res, next) => {
  const { username, character } = req.body;
  if (!username || !character) {
    throw new ClientError(400, 'invalid request');
  }

  const sql = `
  insert into "users" ("username", "character")
       values ($1, $2)
    returning *;
  `;

  const params = [username, character];

  db.query(sql, params)
    .then(result => {
      const { userId, username, character } = result.rows[0];
      const newUser = {
        userId,
        username,
        character
      };
      const token = jwt.sign(newUser, process.env.TOKEN_SECRET);
      const cookieParams = {
        httpOnly: true,
        signed: true
      };
      res.cookie('userToken', token, cookieParams)
        .status(201)
        .json({ success: true });
    })
    .catch(err => next(err));
});

app.get('/api/games', (req, res, next) => {
  const sql = `
  select "games".*,
         "host"."username",
         "host"."character"
    from "games"
    join "users" as "host" on ("games"."hostId" = "host"."userId")
   where "games"."oppId" is null;
  `;

  const dbQuery = db.query(sql);
  dbQuery.then(games => {
    res.status(200).json(games.rows);
  }).catch(err => next(err));
});

app.post('/api/game', (req, res, next) => {
  const sql = `
  insert into "games" ("isJoined")
  values (false)
  returning *;
  `;
  const dbQuery = db.query(sql);
  dbQuery.then(game => {
    io.to('lobby').emit('new game', game.rows[0]);
    res.status(201).send(game.rows[0]);
  }).catch(err => next(err));
});

app.put('/api/game', (req, res, next) => {
  if (!req.query.gameId) {
    throw new ClientError(400, 'gameId is required');
  }
  const gameId = parseFloat(req.query.gameId);
  if (!Number.isInteger(gameId)) {
    throw new ClientError(400, 'gameId must be a positive integer');
  }
  const sql = `
  update "games"
     set "isJoined" = true
   where "gameId" = $1
   returning *;
  `;
  const params = [gameId];
  const dbQuery = db.query(sql, params);
  dbQuery.then(game => {
    if (game.rows[0]) {
      io.to('lobby').emit('game joined', game.rows[0]);
      res.send(game.rows[0]);
    } else {
      throw new ClientError(404, 'gameId not found');
    }
  }).catch(err => next(err));
});

app.use(errorMiddleware);

server.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

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
const authorizationMiddleware = require('./authorization-middleware');

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

// Create a new user
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

// Get all available games (no opponent)
app.get('/api/games', (req, res, next) => {
  const sql = `
  select "games".*,
  "host"."username",
  "host"."character" as "hostChar"
  from "games"
  join "users" as "host" on ("games"."hostId" = "host"."userId")
  where "games"."oppId" is null;
  `;

  const dbQuery = db.query(sql);
  dbQuery.then(games => {
    res.status(200).json(games.rows);
  }).catch(err => next(err));
});

// Get info regarding a game
app.get('/api/game/:gameId', (req, res, next) => {
  const gameId = parseFloat(req.params.gameId);
  if (!gameId) {
    throw new ClientError(400, 'gameId is required');
  }

  if (!Number.isInteger(gameId) || gameId < 1) {
    throw new ClientError(400, 'gameId must be a positive integer');
  }

  const sql = `
  select "g"."gameId",
         "g"."hostId",
         "g"."oppId",
         "host"."username" as "hostName",
         "host"."character" as "hostChar",
         "opp"."username" as "oppName",
         "opp"."character" as "oppChar"
    from "games" as "g"
    join "users" as "host" on ("g"."hostId" = "host"."userId")
    join "users" as "opp" on ("g"."oppId" = "opp"."userId" or
                             ("g"."oppId" is null))
   where "g"."gameId" = 1;
  `;

  const params = [gameId];

  db.query(sql, params)
    .then(game => {
      if (game.rows.length === 0) {
        throw new ClientError(404, 'gameId not found');
      }

      const gameInfo = game.rows[0];
      res.json(gameInfo);
    })
    .catch(err => next(err));
});

// Create a game
app.post('/api/game', authorizationMiddleware, (req, res, next) => {
  const { userId, username, character } = req.user;

  const sql = `
  insert into "games" ("hostId")
  values ($1)
  returning *;
  `;

  const params = [userId];

  db.query(sql, params)
    .then(game => {
      const newGame = Object.assign({}, game.rows[0], { username, character });
      io.to('lobby').emit('new game', newGame);
      res.status(201).send(newGame);
    })
    .catch(err => next(err));
});

// Join a game
app.put('/api/game', authorizationMiddleware, (req, res, next) => {
  if (!req.query.gameId) {
    throw new ClientError(400, 'gameId is required');
  }

  const gameId = parseFloat(req.query.gameId);
  if (!Number.isInteger(gameId) || gameId < 1) {
    throw new ClientError(400, 'gameId must be a positive integer');
  }

  const { userId } = req.user;

  const sql = `
  update "games"
     set "oppId" = $1
   where "gameId" = $2
   returning *;
  `;
  const params = [userId, gameId];
  db.query(sql, params)
    .then(game => {
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

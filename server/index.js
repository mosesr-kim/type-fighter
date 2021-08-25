require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const jsonMiddleware = express.json();
const pg = require('pg');
const ClientError = require('./client-error');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(jsonMiddleware);

app.use(staticMiddleware);

app.get('/api/games', (req, res, next) => {
  const sql = `
  select *
    from "games"
   where "isJoined" = false;
  `;
  const dbQuery = db.query(sql);
  dbQuery.then(games => {
    res.status(200).send(games.rows);
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
      res.send(game.rows[0]);
    } else {
      throw new ClientError(404, 'gameId not found');
    }
  }).catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

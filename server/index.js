require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const jsonMiddleware = express.json();
const pg = require('pg');

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
  select "gameId",
         "isJoined",
         "createdAt"
    from "games";
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
    res.status(200).send(game.rows[0]);
  }).catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

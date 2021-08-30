require('dotenv/config');
const ClientError = require('./client-error');
const db = require('./db');
const jwt = require('jsonwebtoken');

function authorizationMiddleware(req, res, next) {
  if (!req.signedCookies.userToken) {
    throw new ClientError(401, 'authentication required');
  }

  const payload = jwt.verify(req.signedCookies.userToken, process.env.TOKEN_SECRET);

  const sql = `
    select *
      from "users"
     where "userId" = $1;
  `;

  const params = [payload.userId];
  db.query(sql, params)
    .then(result => {
      const [userInfo] = result.rows;
      if (!userInfo) {
        throw new ClientError(401, 'user not found');
      }

      req.user = userInfo;
      next();
    })
    .catch(err => next(err));
}

module.exports = authorizationMiddleware;

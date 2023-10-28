
const jwt = require('jsonwebtoken')
const errorHandler = require('./error.js')

 const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorHandler(401, 'Unauthorized'));
  // if(!token) return res.status(401).send("unauthorized")

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    // if (err) return next(errorHandler(403, 'Forbidden'));

    if(err) return res.status(403).send("forbidden")

    req.user = user;
    next();
  });
};

module.exports = verifyToken
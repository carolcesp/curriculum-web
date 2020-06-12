
const moment = require('moment');
const jwt = require('jwt-simple');

exports.checkToken = (req, res, next) => {
  if (!req.headers['access-token']) {
    return res.status(403).json({ error: 'Debes incluir en la cabecera access-token'});
  }

  const token = req.headers['access-token'];
  let payload = null;

  try {
    payload = jwt.decode(token, process.env.KEY);
  } catch (err) {
    return res.status(403).json({ error: 'El token incluido es incorrecto'})
  }

  if (payload.expireAt < moment().unix()) {
    return res.status(403).json({ error: 'El token ha expirado'})
  }

  if (payload.user !== 'carol') {
    return res.status(403).json({ error: 'El usuario es incorrecto'})

  }

  req.payload = payload;

  next();
}
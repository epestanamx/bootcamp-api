const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const { headers: { token } } = req;

  if (!token) {
    return res.status(401).send({
      msg: 'No se proporciono token de sesión',
    });
  }

  try {
    const usuario = jwt.verify(token, process.env.SECRET);

    req.session = usuario;

    return next();
  } catch (e) {
    return res.status(401).send({
      msg: 'El token de sesión no es valido',
    });
  }
};

module.exports = auth;

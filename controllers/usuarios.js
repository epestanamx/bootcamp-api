const jwt = require('jsonwebtoken');
const { Usuario } = require('../models')();

const getUsuarios = async (req, res) => {
  const usuarios = await Usuario.findAll();

  return res.send(usuarios);
};

const login = async (req, res) => {
  const { body: { correo, contrasenia } } = req;

  const usuario = await Usuario.findOne({
    where: {
      correo,
      contrasenia,
    },
  });

  if (!usuario) {
    return res.status(401).send({ msg: 'El usuario no existe.' });
  }

  const token = jwt.sign(usuario.toJSON(), process.env.SECRET, {
    expiresIn: '7d',
  });

  const { contrasenia: _, ...usuarioSinContrasenia } = usuario.toJSON();

  return res.send({ ...usuarioSinContrasenia, token });
};

module.exports = {
  getUsuarios,
  login,
};

const Categoria = require('../models/categoria');

const obtenerCategoria = async (id) => {
  const categoria = await Categoria.findOne({
    where: {
      id,
    },
  });

  if (!categoria) {
    throw new Error(`La categoría con id ${id} no existe.`);
  }

  return categoria;
};

const getCategoria = async (req, res) => {
  const { params: { id } } = req;

  try {
    const categoria = await obtenerCategoria(id);

    return res.send(categoria);
  } catch (e) {
    return res.status(404).send({ msg: e.message });
  }
};

const getCategorias = async (req, res) => {
  const categorias = await Categoria.findAll();

  return res.send(categorias);
};

const createCategorias = async (req, res) => {
  const { body: { categoria } } = req;

  const categoriaDB = await Categoria.create({ categoria });

  return res.send(categoriaDB);
};

const updateCategorias = async (req, res) => {
  const { body: { categoria }, params: { id } } = req;

  try {
    let categoriaDB = await obtenerCategoria(id);

    categoriaDB.categoria = categoria;

    categoriaDB = await categoriaDB.save();

    return res.send(categoriaDB);
  } catch (e) {
    return res.status(404).send({ msg: e.message });
  }
};

const deleteCategorias = async (req, res) => {
  const { params: { id } } = req;

  try {
    const categoria = await obtenerCategoria(id);
    await categoria.destroy();

    return res.send({ msg: 'ok' });
  } catch (e) {
    return res.status(404).send({ msg: e.message });
  }
};

module.exports = {
  getCategoria,
  getCategorias,
  createCategorias,
  updateCategorias,
  deleteCategorias,
};

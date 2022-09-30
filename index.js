require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');

const Usuario = require('./models/usuario');

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hola mundo'));

app.get('/usuarios', async (req, res) => {
  const usuarios = await Usuario.findAll();

  return res.status(200).send(usuarios);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

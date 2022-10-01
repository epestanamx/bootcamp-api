require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

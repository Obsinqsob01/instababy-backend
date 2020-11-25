const express = require('express');
const routes = require('../routes');

const PORT = process.env.PORT || 3006;

const app = express();

app.use(express.json());

app.use('/api/v1', routes);

module.exports = {
  app,
  PORT,
};

// APP file

const express = require('express');  // Importa o Express
const app = express();               // Faz um Alias, para ao invés de usar "express", usa o "app"

// configura o Express para interpretar requisições em Json
app.use(express.json());

// Importing Routes
const routes = require('./routes');
app.use('/', routes);

module.exports = app;
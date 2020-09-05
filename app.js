'use strict';

const express = require('express');

const app = express();

// Routes
app.get('/hello-world', (req, res) => {
  const name = req.query.name ? req.query.name : 'World';
  res.send(`Hello ${name}!`);
});

app.get('/*', (req, res) => {
  res.send(`Request received: ${req.method} - ${req.path}`);
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Serverless Error');
});

module.exports = app;

'use strict';

const greeter = require('./greeter');
const express = require('express');

const app = express();

// Routes
app.get('/hello-world', (req, res) => {  
  res.send(greeter.sayHello(req.query.name));
  console.log(process.env)
});

app.get('/goodbye-world', (req, res) => {  
  res.send(greeter.sayGoodbye(req.query.name));
  console.log(process.env)
});

app.get('/*', (req, res) => {
  res.send(`Request received: ${req.method} - ${req.path}`);
});

// Error handler
app.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).send('Internal Serverless Error');
});

module.exports = app;

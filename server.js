'use strict';

const express = require('express');

const PORT = 8090;

const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to SCA Cloud School Application, this is my first assessment');
});

app.listen(PORT);

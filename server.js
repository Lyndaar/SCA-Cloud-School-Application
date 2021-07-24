'use strict';

const express = require('express');

const PORT = 8090;

const app = express();
app.get('/', (req, res) => {
  res.send('SCA Cloud School Application');
});

app.listen(PORT);

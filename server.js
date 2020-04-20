const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/paints', require('./routes/api/paints'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(` . . . Express backend services running on port ${port} . . . `)
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({ path: '../.env'});
const connection = require('./connection')

const app = express();

const userRoutes = require ('./routes/user');



//Connection à la DB
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', userRoutes);


module.exports = app;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({ path: '../.env'});
const connection = require('./connection')

const app = express();

const userRoutes = require ('./routes/user');
// const postRoutes = require ('./routes/post');
// const commentRoutes = require ('./routes/comment');



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
// app.use('/api/post', postRoutes);
// app.use('/api/comment', commentRoutes);


module.exports = app;

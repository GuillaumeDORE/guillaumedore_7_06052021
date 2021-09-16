const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });
const connection = require('./connection');
const path = require('path');
const helmet = require("helmet");

const app = express();

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');



//Connection à la DB
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

app.use(helmet());
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);


//Routes
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);


module.exports = app;

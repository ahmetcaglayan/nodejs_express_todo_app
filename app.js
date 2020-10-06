const path = require('path');
const logger = require('morgan');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const todoRoutes = require('./routes/todoRoutes');

dotenv.config({ path: './config.env' });

const DB = process.env.DB_URL.replace('<password>', process.env.DB_PASSWORD);

mongoose.connect(DB, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/todos', todoRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

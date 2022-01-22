var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var userRouter = require('./src/routers/api.router');
var indexRouter = require('./src/routers/index.router');
var accountRouter = require('./src/routers/account.router');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src/assets')));

app.use('/login', accountRouter);
app.use('/api', userRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//connect to server

async function connect() {
  try {
     await mongoose.connect('mongodb+srv://myCoffeeDB:abc%40123@piccolocoffeecluster.dvdub.mongodb.net/Task_2?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
     });
     console.log('connect success');
  } catch (error) {
     console.log("connect fail");
  }
}
connect()

module.exports = app;

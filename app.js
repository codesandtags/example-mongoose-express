var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');

var jsdom = require("jsdom");
var window = jsdom.jsdom().defaultView;

jsdom.jQueryify(window, "http://code.jquery.com/jquery.js", function () {
    var $ = window.$;
    hbs.registerHelper('select', function(value, options) {
        var $el = $('<select />').html( options.fn(this) );
        $el.find('[value="' + value + '"]').attr({'selected':'selected'});
        return $el.html();
    });
});

var index = require('./routes/index');
var countries = require('./routes/countries');

var app = express();

// Mongoose ODM
var DB_URI = 'mongodb://cocoman:clave.123@ds117869.mlab.com:17869/travels';
var mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect(DB_URI);
// Retrieve connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected');
});

console.log('hola k hace.. updated');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/countries', countries);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;

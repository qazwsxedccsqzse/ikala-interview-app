const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');
const cors = require('cors');
const helmet = require('helmet');

const WHITELIST = ['http://localhost:8887', 'http://localhost:3002', 'http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (!WHITELIST.length || !origin) {
      callback(null, true);
    } else if (WHITELIST.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      const error = new Error('Not allowed by CORS');
      error.status = 403;
      callback(error);
    }
  }
}

// swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info: {
    title: 'iKala Interview Swagger API',
    version: '1.0.0',
    description: 'iKala app test',
  },
  host: 'localhost:3000',
  basePath: '/api/v1',
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./routes/*/*.js'],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);


const app = express();
app.use(helmet());
app.use(cors(corsOptions));

app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
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

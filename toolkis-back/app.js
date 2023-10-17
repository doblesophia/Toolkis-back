import 'dotenv/config.js'
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { __dirname, __filename } from './utils.js';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import cors from "cors"
import './config/database.js'
import multer  from 'multer'

const upload = multer({ dest: 'uploads/'})
const  app =  express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

app.post('/workwithus', upload.single('cv'), function (req, res, next) {
  if (!req.file) {
    return res.status(400).send('No se proporcionó ningún archivo');
  } console.log('File name:', req.file.originalname);

  res.send('Archivo subido con éxito');
})


export default app;

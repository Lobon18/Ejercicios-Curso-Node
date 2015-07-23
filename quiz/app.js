//Se importan (Require) primero los MWs a usar:
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var partials = require('express-partials');


//Se importan los Enrutadores:
var routes = require('./routes/index');

//Se crea la Aplicación:
var app = express();

// Configuracion del Motor de Vistas (EJS):
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Se instalan los MWs en el MISMO ORDEN en que han de ejecutarse tras una petición HTTP:
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(partials());

//Se instalan los Enrutadores y se asocian a sus 'gestores':
app.use('/', routes);


// Se captura el 'Error 404' HTTP:
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


//GESTION DE ERRORES:
//En el Entorno de Desarrollo:
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

//En el Entorno de Producción:
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {} //No se pinta el error.
    });
});


//Exportar la APP para el comando de arranque (para ser importada en bin/www):
module.exports = app;
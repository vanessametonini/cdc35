var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
  var app = express();
  app.use(bodyParser.json());
  app.use(expressValidator());

  load('routes')
    .then('infra')
    .into(app);

   app.use(function (req, res) {
    console.log('Recurso não encontrado: ' + req.originalUrl);
    res.status(404);
    res.json({error: 'recurso não encontrado'});
  });

  app.use(function (error, req, res, next) {
    console.error('Erro no middleware');
    console.error(error);
    res.status(500);
    res.json({error: 'erro interno do servidor'});
  });

  return app;
};

const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static('node_modules/bootstrap/dist/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//body-parser deprecated undefined extended: provide extended option custom-express.js
//falta {extended: true} como parametro de urlencoded
app.use(cors());
app.use(expressValidator());

consign()
    .include('./routes')
    .then('./infra')
    .into(app);

app.use(function(request, response, next){
    response.status(404).render('erros/404');
    console.error(`Recurso não encontrado: ${request.originalUrl}`);
})

app.use(function(error, request, response, next){
    response.status(500).render('erros/500', {error});
    console.error(`Erro no middleware: ${error}`);
})

module.exports = app;
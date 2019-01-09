const express = require('express');
const consign = require('consign');
const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static('node_modules/bootstrap/dist/'));

consign()
    .include('./routes')
    .then('./infra')
    .into(app);

// require('./routes/home')(app);
// require('./routes/produtos')(app);

app.use(function(request, response, next){
    response.status(404).render('erros/404');
    console.error(`Recurso não encontrado: ${request.originalUrl}`);
})

app.use(function(error, request, response, next){
    response.status(500).render('erros/500', {error});
    console.error(`Erro no middleware: ${error}`);
})

module.exports = app;
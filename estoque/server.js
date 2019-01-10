var app = require('./custom-express')();
var server = app.listen(3001, function(){
  console.log('Estoque - Servidor rodando');
});
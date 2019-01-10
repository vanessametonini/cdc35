module.exports = function (app) {

  app.get('/estoque/itens', function (req, res, next) {
    var connection = app.infra.connectionFactory();
    var itensEstoqueDao = new app.infra.ItensEstoqueDao(connection);
    itensEstoqueDao.lista(function(err, results){
      if (err) {
        next(err);
      }
      res.jsonp(results);
    });
  });

  app.options('/estoque/itens/:id', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type');
    res.end();
  });

  app.get('/estoque/itens/:id', function (req, res, next) {
    var id = req.params.id;
    var connection = app.infra.connectionFactory();
    var itensEstoqueDao = new app.infra.ItensEstoqueDao(connection);
    itensEstoqueDao.detalha(id, function(err, results){
      if (err) {
        next(err);
      }
      res.header('Access-Control-Allow-Origin','*');
      res.json(results[0]);
    });
  });

  app.patch('/estoque/itens/:id', function(req, res){
    var itemEstoque = req.body;

    req.assert('numero_itens', 'O número de itens em estoque deve ser um número entre 1 e 99').isInt({min: 1, max: 99});

    var errors = req.validationErrors();

    if(errors) {
      console.log('há erros de validação');
      res.status(400).send(errors);
      return;
    }

    itemEstoque.id = req.params.id;

    var connection = app.infra.connectionFactory();
    var itensEstoqueDao = new app.infra.ItensEstoqueDao(connection);
    itensEstoqueDao.atualizaItens(itemEstoque, function(err, result){
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'OPTIONS, PATCH');
      res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type');
      res.json(itemEstoque);
    });

  });

}

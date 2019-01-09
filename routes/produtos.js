const ProdutoDao = require('../infra/ProdutoDao')

module.exports = function(app) {
    app.get('/produtos', function (request, response, next) {
        
        const conexao = require('../infra/connectionFactory')();
        const produtoDao = new ProdutoDao(conexao);

        produtoDao.listar(function(error, resultados){
            
            if(error){
                next(error);
            } else {
                response.render('produtos/lista', {resultados});
            }
        }) 

        conexao.end();

    })
}
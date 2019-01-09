const ProdutoDao = require('../infra/ProdutoDao')

module.exports = function(app) {
    app.get('/produtos', function (request, response) {
        
        const conexao = require('../infra/connectionFactory')();
        const produtoDao = new ProdutoDao(conexao);

        produtoDao.listar(function(erro, resultados){
            
            response.render('produtos/lista', { resultados});
            
        }) 

        conexao.end();

    })
}
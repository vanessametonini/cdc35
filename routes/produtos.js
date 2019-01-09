module.exports = function(app) {
    app.get('/produtos', function (request, response, next) {
        
        const conexao = app.infra.connectionFactory();
        const produtoDao = new app.infra.ProdutoDao(conexao);

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
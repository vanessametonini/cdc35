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

    });

    app.get('/produtos/form', function(request, response) {
        response.render('produtos/form');
    });
    
    app.post('/produtos', function(request, response){
        const conexao = app.infra.connectionFactory();
        const produtoDao = new app.infra.ProdutoDao(conexao);
        const livro = request.body;

        produtoDao.cadastrar(livro, () =>{
            response.render('produtos/salvo')
        });

        conexao.end();
    });
}
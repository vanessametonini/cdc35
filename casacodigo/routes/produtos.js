module.exports = function(app) {

    app.get('/produtos', function (request, response, next) {

        const conexao = app.infra.connectionFactory();
        const produtoDao = new app.infra.ProdutoDao(conexao);

        produtoDao.listar(function(error, resultados){
            
            if(error) next(error);
            
            response.format({
                html: function(){
                    response.render('produtos/lista', {resultados})
                }
                ,
                json: function(){
                    response.json(resultados)
                }
            })
        }) 

        conexao.end();

    });

    app.get('/produtos/form', function(request, response) {
        const livro = { titulo: '', preco: '', descricao: '' }
        response.render('produtos/form', {livro});
    });
    
    app.post('/produtos', function(request, response){
        
        request.assert('titulo', 'Titulo deve ser preenchido').notEmpty();
        request.assert('preco', 'Preço deve ser um número').isFloat();
        
        const erros = request.validationErrors();
        const livro = request.body

        if (erros) {
            response.format({
                html: function () {
                    response
                    .status(400)
                    .render('produtos/form', 
                        { 
                            validationErrors: erros, 
                            livro
                        }
                    );
                }
                ,
                json: function () {
                    response.status(400).json(erros);
                }
            })

            return;
        }

        const conexao = app.infra.connectionFactory();
        const produtoDao = new app.infra.ProdutoDao(conexao);

        produtoDao.cadastrar(livro, () => {
            response.redirect('/produtos');
        });

        conexao.end();
    });
}
function ProdutoDao(conexao){
    this._conexao = conexao;
}

ProdutoDao.prototype.listar = function (callback) {
    this._conexao.query('SELECT * FROM livros', callback);
}

module.exports = conexao => ProdutoDao;
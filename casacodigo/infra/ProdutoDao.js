function ProdutoDao(conexao){
    this._conexao = conexao;
}

ProdutoDao.prototype.listar = function (callback) {
    this._conexao.query('SELECT * FROM livros', callback);
}

ProdutoDao.prototype.cadastrar = function (livro, callback) {
    this._conexao.query('INSERT INTO livros SET ?', livro, callback);
}
module.exports = conexao => ProdutoDao;
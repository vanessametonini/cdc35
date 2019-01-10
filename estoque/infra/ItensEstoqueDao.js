function ItensEstoqueDao(connection) {
  this._connection = connection;
};

ItensEstoqueDao.prototype.lista = function(callback) {
  this._connection.query('select id, titulo, numero_itens from itens_estoque', callback);
};

ItensEstoqueDao.prototype.detalha = function(id, callback) {
  this._connection.query('select * from itens_estoque where id = ?', [id], callback);
};

ItensEstoqueDao.prototype.atualizaItens = function(itemEstoque, callback) {
  this._connection.query('update itens_estoque SET numero_itens=? where id=?', [itemEstoque.numero_itens, itemEstoque.id], callback);
}

module.exports = function() {
  return ItensEstoqueDao;
}

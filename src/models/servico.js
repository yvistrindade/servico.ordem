const mongoose = require('mongoose');

const servicoSchema = new mongoose.Schema({
  nome: String,
  cpf: String,
  telefone: String,
  email: String,
  cep: String,
  endereco: String,
  marca: String,
  modelo: String,
  serie: String,
  acessorios: String,
  diagnostico: String,
  servicos: String,
  dataEntrada: String,
  dataSaida: String,
  valor: String,
  status: String,
});

module.exports = mongoose.model('OrdemServico', servicoSchema);

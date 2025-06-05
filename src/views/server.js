const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const OrdemServico = require('./models/OrdemServico');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/ordemServicoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/api/ordens', async (req, res) => {
  try {
    const ordem = new OrdemServico(req.body);
    await ordem.save();
    res.status(201).json({ message: 'Ordem salva com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao salvar a ordem.' });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));

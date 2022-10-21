const express = require('express');
const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json());

app.listen(3000);

// rotas - endpoints
app.get('/', (req, res) => {
  res.status(200).json({message: 'Configurando status da resposta'})
})

app.post('/createproduct', (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  if (!name || !price) {
    res.status(422).json({message: 'Nome e Preco sao obrigatorios!'})
  }

  res.status(201).json({message: `O produto ${name} com o preco ${price} foi criado com sucesso!`})
})
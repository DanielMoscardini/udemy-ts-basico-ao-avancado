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
  res.json({
    message: 'Testando post'
  })
})

app.post('/createproduct', (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  res.json({message: `O produto ${name} com o preco ${price} foi criado com sucesso!`})
})
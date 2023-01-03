const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy un nuevo endpoint');
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 100,
  });
});

app.listen(port, () => {
  console.log(`Corriendo en: ${port}`);
});

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
  res.json([
    {
      name: 'Product 1',
      price: 100,
    },
    {
      name: 'Product 2',
      price: 1000,
    },
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    name: 'Product 2',
    price: 1000,
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { productId, categoryId } = req.params;
  res.json({
    productId,
    categoryId,
  });
});

app.listen(port, () => {
  console.log(`Corriendo en: ${port}`);
});

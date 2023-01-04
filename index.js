const { faker } = require('@faker-js/faker');

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
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      title: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      description: faker.commerce.productDescription(),
      image: faker.image.imageUrl(),
      color: faker.commerce.color(),
    });
  }
  res.json(products);
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

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit || offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parámetros');
  }
});

app.get('/products/filter', (req, res)=>{

})

app.listen(port, () => {
  console.log(`Corriendo en: ${port}`);
});

const { faker } = require('@faker-js/faker');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      title: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      description: faker.commerce.productDescription(),
      image: faker.image.imageUrl(),
      color: faker.color.human(),
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    title: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(), 10),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
  });
});



module.exports = router;

const { faker } = require('@faker-js/faker');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const categories = [];
  for (let i = 0; i < 10; i++) {
    categories.push({
      name: faker.commerce.department(),
      image: faker.image.imageUrl(),
    });
  }
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: faker.commerce.department(),
    image: faker.image.imageUrl(),
  });
});

module.exports = router;

const { faker } = require('@faker-js/faker');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  for (let i = 0; i < 5; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      gender: faker.name.gender(),
      birthdate: faker.date.birthdate(),
      password: faker.internet.password(),
    });
  }
  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    gender: faker.name.gender(),
    birthdate: faker.date.birthdate(),
    password: faker.internet.password(),
  });
});

module.exports = router;

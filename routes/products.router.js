const ProductsService = require('../services/products.service');

const express = require('express');
const router = express.Router();

const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();

  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const product = service.findOne(id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({
      message: 'Not found',
    });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  const { error, product } = service.create(body);
  if (error) {
    res.status(400).json({
      error,
      product,
    });
  } else {
    res.status(201).json({
      message: 'Product created',
      product,
    });
  }
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;

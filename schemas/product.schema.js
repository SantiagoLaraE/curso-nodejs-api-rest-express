const Joi = require('joi');

const id = Joi.string().uuid();
const title = Joi.string().min(3).max(60);
const price = Joi.number().integer().min(10000);
const description = Joi.string().min(50);
const image = Joi.string().uri();
const color = Joi.string().min(2);

const createProductSchema = Joi.object({
  title: title.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
  color: color.required(),
});

const updateProductSchema = Joi.object({
  title: title,
  price: price,
  description: description,
  image: image,
  color: color,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };

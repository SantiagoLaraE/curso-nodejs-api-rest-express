const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }
  generate() {
    for (let i = 0; i < 100; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        color: faker.color.human(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return new Promise((resolve, reject) => {
      resolve(this.products);
    });
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }

    return product;
  }

  async update(id, data) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not Found');
    }

    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...data,
    };

    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('No se ha encontrado ningún producto con ese ID');
    }
    this.products.splice(index, 1);
    return 'Product deleted';
  }
}

module.exports = ProductsService;

const { faker } = require('@faker-js/faker');

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
  create(product) {
    const productSchema = Object.keys(this.products[0]).filter(
      (prop) => prop !== 'id'
    );

    const newProductProps = Object.keys(product);

    const notValidProperties = newProductProps.reduce((arr, item) => {
      if (!productSchema.includes(item)) {
        arr.push(item);
      }
      return arr;
    }, []);

    const requiredProperties = productSchema.reduce((arr, item) => {
      if (!newProductProps.includes(item)) {
        arr.push(item);
      }
      return arr;
    }, []);

    const message = () => {
      let text = '';
      if (notValidProperties.length) {
        text += `This properties are not valid: ${notValidProperties.join(
          ', '
        )}. `;
      }
      if (requiredProperties.length) {
        text += `This properties are required: ${requiredProperties.join(
          ', '
        )}`;
      }
      return text;
    };
    const error = message() ? message() : null;

    if (!error) {
      product.id = faker.datatype.uuid();
    }

    return { error, product };
  }

  find() {
    return this.products;
  }
  findOne(id) {
    return this.products.find((item) => item.id === id);
  }
  update() {}
  delete() {}
}

module.exports = ProductsService;

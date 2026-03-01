const { faker } = require('@faker-js/faker');

class UniqueGenerator {

  static getUniqueName() {
    return faker.person.firstName();
  }

  static getFakeData(type) {
    switch (type) {
      case 'firstname':
        return faker.person.firstName();

      case 'lastname':
        return faker.person.lastName();

      case 'email':
        return faker.internet.email();

      case 'password':
        return faker.internet.password();

      case 'phone':
        return faker.phone.number();

      default:
        throw new Error('Invalid type provided');
    }
  }
}

module.exports = { UniqueGenerator };
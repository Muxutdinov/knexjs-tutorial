const personDAO1 = require("../doe/person");
class PersonService {
  createPerson(personDAO) {
    const { first_name, last_name, email } = personDAO;
    console.log(first_name, last_name, email);
    return personDAO1.createPerson(first_name, last_name, email);
  }
}

module.exports = new PersonService();

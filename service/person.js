// const personDAO = require("../doe/person");
class PersonService {
  createPerson(personDAO) {
    const { first_name, last_name, email } =
      (personDAO = require("../doe/person"));
    return personDAO.createPerson(first_name, last_name, email);
  }
}

module.exports = new PersonService();

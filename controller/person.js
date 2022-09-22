const PersonService = require("../service/person");

class PersonController {
  async createPerson(req, res) {
    console.log(req.body);
    try {
      const id = await PersonService.createPerson(req.body);
      res.status(201).json(id);
    } catch (error) {
      res.json(error.message);
    }
  }
}

module.exports = new PersonController();

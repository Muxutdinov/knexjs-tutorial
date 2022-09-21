const express = require("express");
const router = express.Router();
const ControllerPerson = require("../controller/person");

router.post("/person", ControllerPerson.createPerson);

module.exports = router;

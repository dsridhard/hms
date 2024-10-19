const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patient.controller.js");

router.post("/patients", patientController.create);
router.get("/patients", patientController.findAll);
router.get("/patients/:id", patientController.findOne);

module.exports = router;

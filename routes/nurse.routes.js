const express = require("express");
const router = express.Router();
const patientController = require("../controllers/nurse.controller");

router.post("/nurse", patientController.create);
router.get("/nurses", patientController.findAll);
router.get("/nurses/:id", patientController.findOne);

module.exports = router;

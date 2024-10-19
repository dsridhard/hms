const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctor.controller.js");

router.post("/doctor", doctorController.create);
router.get("/doctors", doctorController.findAll);
router.get("/doctors/:id", doctorController.findOne);

module.exports = router;

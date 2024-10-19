const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/admin.controller.js");

router.post("/admin", doctorController.create);
router.get("/admins", doctorController.findAll);
router.get("/admin/:id", doctorController.findOne);

module.exports = router;

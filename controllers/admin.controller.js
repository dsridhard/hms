const db = require("../models");
const Doctor = db.admin;

// Create a new patient
exports.create = (req, res) => {
  const { name, adminType } = req.body;

  Doctor.create({
    name,
    adminType
  })
    .then((admin) => res.status(201).json(admin))
    .catch((error) => res.status(400).json({ error: error.message }));
};

// Retrieve all patients
exports.findAll = (req, res) => {
    Doctor.findAll()
    .then((admins) => res.status(200).json(admins))
    .catch((error) => res.status(400).json({ error: error.message }));
};

// Retrieve a single patient by ID
exports.findOne = (req, res) => {
  const id = req.params.id;
  Doctor.findByPk(id)
    .then((admin) => {
      if (admin) {
        res.status(200).json(admin);
      } else {
        res.status(404).json({ message: "Patient not found" });
      }
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

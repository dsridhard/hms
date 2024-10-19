const db = require("../models");
const Doctor = db.doctor;

// Create a new patient
exports.create = (req, res) => {
  const { name, specialization } = req.body;

  Doctor.create({
    name,
    specialization
  })
    .then((doctor) => res.status(201).json(doctor))
    .catch((error) => res.status(400).json({ error: error.message }));
};

// Retrieve all patients
exports.findAll = (req, res) => {
    Doctor.findAll()
    .then((doctors) => res.status(200).json(doctors))
    .catch((error) => res.status(400).json({ error: error.message }));
};

// Retrieve a single patient by ID
exports.findOne = (req, res) => {
  const id = req.params.id;
  Doctor.findByPk(id)
    .then((doctor) => {
      if (doctor) {
        res.status(200).json(doctor);
      } else {
        res.status(404).json({ message: "Patient not found" });
      }
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

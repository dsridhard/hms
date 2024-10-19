const db = require("../models");
const Patient = db.patient;

// Create a new patient
exports.create = (req, res) => {
  const { name, age, address, contactNumber } = req.body;

  Patient.create({
    name,
    age,
    address,
    contactNumber,
  })
    .then((patient) => res.status(201).json(patient))
    .catch((error) => res.status(400).json({ error: error.message }));
};

// Retrieve all patients
exports.findAll = (req, res) => {
  Patient.findAll()
    .then((patients) => res.status(200).json(patients))
    .catch((error) => res.status(400).json({ error: error.message }));
};

// Retrieve a single patient by ID
exports.findOne = (req, res) => {
  const id = req.params.id;
  Patient.findByPk(id)
    .then((patient) => {
      if (patient) {
        res.status(200).json(patient);
      } else {
        res.status(404).json({ message: "Patient not found" });
      }
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

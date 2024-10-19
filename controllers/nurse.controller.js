const db = require("../models");
const Nurse = db.nurse;

// Create a new patient
exports.create = (req, res) => {
  const { name, age, address, contactNumber } = req.body;

  Patient.create({
    name,
    age,
    dob,
    dept,
    contactNumber
  })
    .then((nurse) => res.status(201).json(nurse))
    .catch((error) => res.status(400).json({ error: error.message }));
};

// Retrieve all patients
exports.findAll = (req, res) => {
  Nurse.findAll()
    .then((nurses) => res.status(200).json(nurses))
    .catch((error) => res.status(400).json({ error: error.message }));
};

// Retrieve a single patient by ID
exports.findOne = (req, res) => {
  const id = req.params.id;
  Nurse.findByPk(id)
    .then((nurse) => {
      if (nurse) {
        res.status(200).json(nurse);
      } else {
        res.status(404).json({ message: "Patient not found" });
      }
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

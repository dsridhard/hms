const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const patientRoutes = require("./routes/patient.routes");
const doctorRoutes = require("./routes/doctor.routes");
const nurseRoutes = require("./routes/nurse.routes");
app.use("/api", patientRoutes);
app.use("/api",doctorRoutes)
app.use("/api",nurseRoutes)
// Connect to the database
db.sequelize.sync().then(() => {
  console.log("Connected to the database.");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

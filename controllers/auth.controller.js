const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secret = process.env.JWT_SECRET;

exports.login = (req, res) => {
  const { username, password } = req.body;
  // Verify user credentials (from database)
  // Assuming we have a User model and a findUserByUsername method
  User.findUserByUsername(username)
    .then((user) => {
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        return res.status(401).json({ message: "Invalid password!" });
      }

      const token = jwt.sign({ id: user.id }, secret, { expiresIn: 86400 });
      res.status(200).json({ token });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

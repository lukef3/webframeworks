const User = require('../models/users');

const registerUser = (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });

  newUser.save()
    .then(user => res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        email: user.email
      }
    }))
    .catch(error => res.status(500).json({
      message: "Error registering new user",
      error: error.message
    }));
};

module.exports = {
  registerUser
};

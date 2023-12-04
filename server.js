const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// Connect to MongoDB
const dbURI =
"mongodb+srv://lukef03:PbpMW7lGPp9R9gT6@cluster0.v94q4d7.mongodb.net/?retryWrites=true&w=majority";
try {
mongoose.connect(
dbURI,
{ useNewUrlParser: true, useUnifiedTopology: true }).then(
() => {console.log(" Mongoose is connected")},
err=> {console.log(err)}
);
}
catch (e) {
console.log("could not connect");
}

// Create a User Schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create a User model
const User = mongoose.model('User', UserSchema);

// A simple route for registering users
app.post('/api/register', (req, res) => {
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
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

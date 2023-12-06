const mongoose = require('mongoose');
const dbURI =
"mongodb+srv://lukef03:PbpMW7lGPp9R9gT6@cluster0.v94q4d7.mongodb.net/?retryWrites=true&w=majority";
try {
mongoose.connect(
dbURI,
{ useNewUrlParser: true, useUnifiedTopology: true }).then(
() => {console.log("DB - Mongoose is connected")},
err=> {console.log(err)}
);
}
catch (e) {
console.log("could not connect");
}
require('./tasks');

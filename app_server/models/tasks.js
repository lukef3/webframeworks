const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: String,
    address: String,
    rating: Number,
    facilities: [String]
});
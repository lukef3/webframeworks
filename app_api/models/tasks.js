const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: String,
    category: String,
    priority: Number,
    dueDate: Date
});

mongoose.model('Task', taskSchema);
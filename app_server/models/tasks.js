const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskID: Number,
    name: String,
    category: String,
    priority: Number,
    dueDate: Date
});
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskID: int,
    name: String,
    category: String,
    priority: Int,
    dueDate: Date
});
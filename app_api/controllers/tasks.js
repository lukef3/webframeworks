//api
const mongoose = require('mongoose');
const Task = mongoose.model('Task');

const taskList = async function (req, res) {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

const taskDeleteOne = async function (req, res) {
    const taskid = req.params.taskid;
    if (taskid) {
        try {
            await Task.findByIdAndRemove(taskid);
            res.status(204).json(null);
        } catch (err) {
            res.status(404).json(err);
        }
    } else {
        res.status(404).json({ "message": "No taskid" });
    }
};

module.exports = {
    taskList,
    taskDeleteOne
};

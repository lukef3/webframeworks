const mongoose = require('mongoose');
const Task = mongoose.model('Task');

const login = function (req, res) {
    res.render('login', { title: 'Login' });
};

const tasklist = async function (req, res) {
    try {
        const tasks = await Task.find({});
        
        res.render('task-list', { 
            title: 'Task List',
            pageHeader: {
                title: 'Student Planner',
                tasksTitle: 'Current Tasks'
            },
            tasks: tasks
        });
    } catch (err) {
        res.render('error', { error: err });
    }
};



const taskDeleteOne = async function (req, res) {
    const taskid = req.params.taskid;
    if (taskid) {
      try {
        await Task
        .findByIdAndRemove(taskid);
        res.status(204).json(null);
      } catch (err) {
        res.status(404).json(err);
      }
    } 
    else {
      res.status(404).json({ "message": "No taskid" });
    }
};
  


const register = function (req, res) {
    res.render('register-form', { title: 'Add review' });
};

module.exports = {
    login,
    tasklist,
    register,
    taskDeleteOne
};

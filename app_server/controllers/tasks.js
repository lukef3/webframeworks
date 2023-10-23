
const login = function (req, res) {
    res.render('login', { title: 'Login' });
};

const tasklist = function (req, res) {
    res.render('task-list', { 
        title: 'Task List',
        pageHeader: {
            title: 'Student Planner',
            tasksTitle: 'Current Tasks'
        },
        tasks:[{
            taskID: 1,
            name: 'Web Frameworks',
            category: "College",
            priority: 1,
            dueDate: '123',
        },{
            taskID: 2,
            name: 'Software Tools',
            category: "College",
            priority: 2,
            dueDate: '123',
        },{
            taskID: 3,
            name: 'Update CV',
            category: "Work",
            priority: 3,
            dueDate: '123',
        },{
            taskID: 4,
            name: 'Go to gym',
            category: "Fitness",
            priority: 1,
            dueDate: '123',
        }]
    });
};

const register = function (req, res) {
    res.render('register-form', { title: 'Add review' });
};

module.exports = {
    login,
    tasklist,
    register
};

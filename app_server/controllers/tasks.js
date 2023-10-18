
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
            name: 'Web Frameworks',
            dueDate: '123'
        },{
            name: 'Software Tools',
            dueDate: '123'
        },{
            name: 'Update CV',
            dueDate: '123'
        },{
            name: 'Go to gym',
            dueDate: '123'
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

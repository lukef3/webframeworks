
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
            category: "College",
            priority: 1,
            dueDate: '1/1/1',
        },{
            name: 'Software Tools',
            category: "College",
            priority: 2,
            dueDate: '1/1/1',
        },{
            name: 'Update CV',
            category: "Work",
            priority: 3,
            dueDate: '1/1/1',
        },{
            name: 'Go to gym',
            category: "Fitness",
            priority: 1,
            dueDate: '1/1/1',
        },{
            name: 'Data Structures CA',
            category: "College",
            priority: 1,
            dueDate: '1/1/1',
        },{
            name: 'OOAD CA',
            category: "College",
            priority: 1,
            dueDate: '1/1/1',
        },{
            name: 'OOAD CA',
            category: "College",
            priority: 1,
            dueDate: '1/1/1',
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

//express
const request = require('request');
const apiOptions = {
    server: 'https://helloexpresslf.onrender.com'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://helloexpresslf.onrender.com';
}

const renderTaskList = (req, res, responseBody) => {
    res.render('task-list', { 
        title: 'Task List',
        pageHeader: {
            title: 'Student Planner',
            tasksTitle: 'Current Tasks'
        },
        tasks: responseBody
    });
};

const homelist = function (req, res) {
    const path = '/api/tasks';
    const requestOptions = {
        url : apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(requestOptions, (err, response, body) => {
        if (err) {
            console.error(err);
            res.render('error', { error: 'Error fetching tasks' });
            return;
        }
        renderTaskList(req, res, body);
    });
};


const login = function (req, res) {
    res.render('login', { title: 'Login' });
};

const register = function (req, res) {
    res.render('register-form', { title: 'Register' });
};

module.exports = {
    homelist,
    login,
    register
};

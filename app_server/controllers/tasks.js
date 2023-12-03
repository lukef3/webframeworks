const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://your-production-url.com';
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

const tasklist = function (req, res) {
    const requestOptions = {
        url: `${apiOptions.server}/api/tasks`,
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
    res.render('register-form', { title: 'Add review' });
};

module.exports = {
    tasklist,
    login,
    register
};

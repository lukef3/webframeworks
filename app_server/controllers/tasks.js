//express
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
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


module.exports = {
    homelist
};

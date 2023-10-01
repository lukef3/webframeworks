/* GET 'home' page */
const login = function (req, res) {
    res.render('login', { title: 'Login' });
};
/* GET 'Location info' page */
const tasklist = function (req, res) {
    res.render('task-list', { title: 'Task List' });
};

/* GET 'Add review' page */

const register = function (req, res) {
    res.render('register-form', { title: 'Add review' });
};


module.exports = {
    login,
    tasklist,
    register
};

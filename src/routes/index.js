const {
    Router
} = require('express');

module.exports = function () {
    const app = Router();

    app.get('/', function (req, res) {
        res.render('index')

    })

    app.get('/post', function (req, res) {
        res.render('show')

    })
    return app;
}
const passport = require("passport");

module.exports = function (req, res, next) {
    passport.authenticate('local', {},
        function (err, user, info) {

            if (err) {
                return next(err);
            }

            if (!user) {
                return res.redirect('/login');
            }

            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                return res.redirect('/');
            });
        })
}
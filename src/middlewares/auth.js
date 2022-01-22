const jwt = require('jsonwebtoken')

exports.auth = (req, res, next) => {
    try {
        var token = jwt.verify(req.cookies.token, 'mk')
        if (token) {
            next()
           // res.redirect('/')
        }
    } catch (error) {
res.render('login',{message: " Please log in with the correct account"})
        // res.json({message: "Please login"})
    }
}
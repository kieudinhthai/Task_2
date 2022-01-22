const jwt = require('jsonwebtoken');
var User = require('../models/users.model')
var Account = require('../models/account.model')
var md5 = require('md5');

exports.getAll = async (req, res, next) => {
    try {
        const data = await User.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}

exports.search = async (req, res, next) => {
    const query = req.query.q
    try {
        const data = await User.find({
            $or: [
                { username: new RegExp(query, 'i') },
                { email: new RegExp(query, 'i') }
            ]
        })

        res.status(200).json({
            message: " Search successful",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            message: " No user is found",
            error: error
        })
    }
}

exports.add = async (req, res, next) => {
    const data = req.body
    console.log(data)

    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
         await User.updateOne({ _id: data[i]._id }, data[i])
          // res.json(result)

        
    }
    res.json("ok")
}

//----------------------------------------------

exports.login = async (req, res, next) => {
    try {
        const data = await Account.findOne({ user: req.body.user, password: md5(req.body.password) })
        if (data != null) {
            let token = jwt.sign({ _id: data._id }, "mk")
            res.json({
                message: "Login successful",
                token: token
            })
            // res.render("index",{
            //     message: "Login successful",
            //     token : token
            // })
        } else {
            res.json("User or password incorrect ")
        }
    } catch (error) {
        res.status(404).json(error)
    }
}
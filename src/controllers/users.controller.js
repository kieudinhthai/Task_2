var User = require('../models/users.model')

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
    try {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i])
            const result = await User.updateOne({ _id: data[i]._id }, data[i])
            res.json(result)
        }
    } catch (error) {
      res.json(error)
    }
    
}
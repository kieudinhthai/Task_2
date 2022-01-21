const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id:{ type: 'number', required: true},
    username: { type: 'string', required: true },
    email: { type: 'string', required: true },
    birthday: { type: 'string', required: true },

})

module.exports = mongoose.model('User', userSchema)
const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    
    user: { type: 'string', required: true },
    password: { type: 'string', required: true },
    

})

module.exports = mongoose.model('Account', accountSchema)
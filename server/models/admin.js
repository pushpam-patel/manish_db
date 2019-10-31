let mongoose = require('mongoose')

let Admin = mongoose.model('Admin', {
    username:{
        type:String
    },
    password:{
        type:String
    }
})

module.exports = { Admin }
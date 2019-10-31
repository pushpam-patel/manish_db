let mongoose = require('mongoose')

let Disease = mongoose.model('Disease', {
    diseasename:{
        type:String
    },
    did:{
        type:String
    },
    symptoms:{
        type:String
    },
    medicine:{
        type:String
    },
    prevention:{
        type:String
    },
    reference:{
        type:String
    },
    status:{
        type:String
    },
})

module.exports = { Disease }
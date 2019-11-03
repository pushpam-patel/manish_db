let mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://m123:m123456@ds241688.mlab.com:41688/manish')
module.exports={mongoose}
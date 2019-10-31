let mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://mainsh1:manish123@ds241688.mlab.com:41688/manish')
module.exports={mongoose}
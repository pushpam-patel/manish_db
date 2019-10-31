let express = require('express')
let bodyParser = require('body-parser')
let cors=require('cors')
let { mongoose } = require('./db/mongoose.js')

let { User } = require('./models/user.js')
let { Admin } = require('./models/admin.js')
let { Disease } = require('./models/disease.js')

let app = express()
let port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())

app.listen(port)
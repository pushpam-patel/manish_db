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

app.get('/users', (req, res) => {
    User.find().then((users) => {
        res.send(users)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/users', (req, res) => {
    console.log(req.body)

    let user = new User({
        username:req.body.username,
        password:req.body.password,
        education:req.body.education,
        age:req.body.age,
        university:req.body.university
    })

    user.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.get('/admin', (req, res) => {
    Admin.find().then((admin) => {
        res.send(admin)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/admin', (req, res) => {
    console.log(req.body)

    let admin = new Admin({
        username:req.body.username,
        password:req.body.password,
    })

    user.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.get('/disease', (req, res) => {
    Admin.find().then((disease) => {
        res.send(disease)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/disease', (req, res) => {
    console.log(req.body)

    let disease = new Disease({
        diseasename:req.body.diseasename,
        did:req.body.did,
        symptoms:req.body.symptoms,
        medicine:req.body.medicine,
        prevention:req.body.prevention,
        reference:req.body.reference,
        status:req.body.status,
    })

    user.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.listen(port)
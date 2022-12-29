require('dotenv').config()
require('./config/database')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json()) //req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))
app.use(require('./config/checkToken'))

//app.use('/api', routes) <============ Finish code once you got it

app.use('/api/fruits', require('./routes/api/fruits'))
app.use('/api/users', require('./routes/api/users'))

app.get('/api/test', (req, res) => {
    res.json({'eureka': 'you found it'})
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})



app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
})
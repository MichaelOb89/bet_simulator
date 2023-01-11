require('dotenv').config()
require('./config/database')
const schedule = require('node-schedule')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
require('./config/betGameCompleted')
require('./config/newPayout')


const app = express()


app.use(express.json()) //req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.use(require('./config/checkToken'));

//const ensureLoggeIn = require('./config/ensureLoggedIn')

//app.use('/api', routes) <============ Finish code once you got it



app.use('/api/users', require('./routes/api/users'))
app.use('/api/games', require('./routes/api/games'))
app.use('/api/standings', require('./routes/api/standings'))
app.use('/api/bets', require('./routes/api/bets'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// const job = schedule.scheduleJob('50 * * * * * ', function(){
//     console.log("yesssss")
//     const today = new Date() 
//     Bet.updateMany({
//       date:{$lt: today}
//     },
//     {isFinished: true})
// })

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
})
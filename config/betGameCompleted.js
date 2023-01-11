// const game = require('../data/games')
const schedule = require('node-schedule')
require('dotenv').config()
const db = require('./database')
const Bet = require('../models/bet.js')

const betDateChecker = async() => {
  const today = new Date() 
  Bet.updateMany({
    date:{$lt: today}
  },
  {isFinished: true}).then(()=>console.log("work!"))
}

const job = schedule.scheduleJob('* 1 * * *', ()=>{
  betDateChecker()
})

module.exports = job

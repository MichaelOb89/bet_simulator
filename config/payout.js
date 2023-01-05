// const game = require('../data/games')

require('dotenv').config()
const db = require('./database')
const Bet = require('../models/bet')
const User = require('../models/user')


const today = new Date() 


function betUpdater(){
  Bet.updateMany({
    date:{$lt: today}
  }, {isFinished: true})
  .then(()=>db.close())
}



betUpdater()